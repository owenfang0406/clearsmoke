import React, { useRef, useState, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom';
import styles from "./PostModal.module.css"
import { MdClose } from 'react-icons/md';
import { UserContext } from "../../../index";
import { CameraIcon } from '@heroicons/react/24/outline'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '../../firebase-config'
import { ref, getDownloadURL, uploadString } from 'firebase/storage'
import Loader from '../../Loader/Loader';

function PostModal() {
    const { authUser, userSignOut, avatarURL, profiles, setPostModalOpen, postModalOpen, toggleModal } = useContext(UserContext);
    const filePickerRef = useRef(null)
    const popUpRef = useRef(null)
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false)
    const captionRef = useRef(null)
    

    const uploadPost = async () => {
        if(loading) return;
        setLoading(true);

        const docRef = await addDoc(collection(db, 'posts'), {
            username: profiles.name,
            uid: profiles.uid,
            photographer: profiles.photographer,
            caption: captionRef.current.value,
            profileImg: profiles.avatarURL,
            timestamp: serverTimestamp(),
        })


        const imageRef = ref(storage, `posts/${docRef.id}/image`);

        await uploadString(imageRef, selectedFile, "data_url").then(async snapshot => {
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc (doc(db, 'posts', docRef.id), {
                image: downloadURL
            } )
        })

        toggleModal();
        setLoading(false)
        setSelectedFile(null)
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }

    const handleCameraIconClick = () => {
        filePickerRef.current.click()
    }


    if (!postModalOpen) return null
    return ReactDOM.createPortal(
    <div 
    className={styles.wrapper}
    ref={popUpRef}
    >  
        {loading && <Loader></Loader>}
        <div 
        className="flex relative flex-wrap justify-center items-center bg-white w-96 h-96">
            <MdClose className={styles.closeBtn}
            onClick={()=>setPostModalOpen(false)}
            ></MdClose>
            <div className="w-full h-[250px] flex justify-center items-center">
            {selectedFile ? 
                (
                        <img 
                        className="w-full h-full object-contain cursor-pointer"
                        src={selectedFile} onClick={() => setSelectedFile(null)}></img>
                ) 
                : (
                <div 
                onClick={handleCameraIconClick}
                className='flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer'>
                    <CameraIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                    ></CameraIcon>
                </div>
                )}
            </div>
            <div className="flex items-center justify-center flex-wrap">
                <div className="w-full mt-5 sm:mt-6">
                    <label>
                        <input
                        ref={captionRef}
                        type="text"
                        placeholder="Add your caption"
                        className="border-none flex-1 focus:ring-0 outline-none"
                        ></input>
                        <input
                        ref={filePickerRef}
                        type="file"
                        accept=".png, .jpg, .jpeg, .gif"
                        hidden
                        onChange={addImageToPost}
                        ></input>
                    </label>
                </div>
                <div>
                    <button
                        onClick={uploadPost}
                        disabled={!selectedFile}
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4
                        py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                    >
                        {loading ? "Uploading..." : "Upload Post"}   
                    </button>
                </div>
            </div>
        </div>
    </div>, document.getElementById("PostsModal") )
}

export default PostModal