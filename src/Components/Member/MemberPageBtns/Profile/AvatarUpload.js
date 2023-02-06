import React, {useState, useContext} from 'react'
import { storage, db } from '../../../firebase-config';
import { ref, uploadBytes, list, deleteObject, getDownloadURL } from "firebase/storage";
import { UserContext } from "../../../../index";
import { v4 } from 'uuid';
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import styles from "./AvatarUpload.module.css";

function AvatarUpload() {
  const { authUser, userSignOut, updateNewURL } = useContext(UserContext);
  const [imageUpload, setImageUpload] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewURl] = useState(null);
  const [error, setError] = useState(null);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
    const reader = new FileReader();
    reader.onload = function(e) {
      setPreviewURl(e.target.result);
      console.log(e.target);
    }
      reader.readAsDataURL(e.target.files[0]);
  }
  const uploadImage = () => {
    if (imageUpload == null) {
        setError("No photo selected");
        return
    };
    const dbCollection = collection(db, `${authUser.email}`);
    const dbRef = doc(db, `${authUser.email}`, "avatar");
    const folderRef = ref(storage,`avatar/${authUser.email}/`);
    const imageRef = ref(storage, `avatar/${authUser.email}/${imageUpload.name + v4()}`);
    list(folderRef).then((res)=>{
      if (res.items.length === 0) {
        uploadBytes(imageRef, imageUpload).then(()=>{
          alert("imgUploaded")
          getDownloadURL(imageRef).then((downloadURl) =>{
            setDoc(dbRef,{
              avatarURL: downloadURl,
              id: dbRef.id
            });
            alert("url: " + downloadURl);
            setImageUpload(null);
            setSelectedFile(null);
            setPreviewURl(null);
            setError("");
          })
        })
        return
      }
      res.items.forEach((itemRef)=>{
        deleteObject(itemRef).then(()=>{
          console.log("Old image deleted.");
          uploadBytes(imageRef, imageUpload).then(()=>{
            alert("imgUploaded")
            getDownloadURL(imageRef).then((downloadURl) =>{
              setDoc(dbRef,{
                avatarURL: downloadURl,
                id: dbRef.id
              });
              updateNewURL(downloadURl);
              alert("url: " + downloadURl);
              setImageUpload(null);
              setSelectedFile(null);
              setPreviewURl(null);
              setError("");
            })
          })
        })
      })
    })
  };

  return (
    <div>
      <div>
        {previewUrl ? (
        <div className={styles.wrapper}>
          <div className={styles.previewCon}>
            <img className={styles.preview} src={previewUrl} alt="Preview" />
          </div>
        </div>
        ) : (
          <div className={styles.wrapper}>
            <div className={styles.previewCon}>
              <div className={styles.previewText}>No image selected</div>
            </div>
        </div>
        )}
        <div className={styles.UploadForm}>
          <label for="file" className={styles.uploadBtn}>
            <span className={styles.UploadStr}>Choose</span>
            <input type="file" accept="image/*" onChange={(e) => {
              setImageUpload(e.target.files[0]);
              handleFileChange(e);
              }}></input>
          </label>
          {error !== "" && <div className={styles.errorMsg}>{error}</div>}
          <button type='submit' className={styles.submitBtn} onClick={uploadImage}>
            <span className={styles.submitStr}>Submit</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AvatarUpload