import React, {useEffect, useRef, useState} from 'react'
import styles from "./MasonryGallery.module.css";
import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';
import { BiChevronLeft, BiChevronRight } from"react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Post from './Post';

function PostsContainer({ posts, open, setOpen }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (event) => {
    setScrollPosition(event.target.scrollTop);
    console.log(event)
  };

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);




    if(!open) return null
  return ReactDOM.createPortal (
    <div 
    className={styles.mainCon}
    onScroll={(e)=>handleScroll(e)} ref={containerRef}
    >
      <MdClose 
      className={styles.closeBtn}
      onClick={()=>setOpen(false)}></MdClose>
      <div className={styles.imgCon}>
        {posts.map((post, index) => (<Post
          key={post.id}
          id={post.id}
          username = {post.data().username}
          userImg = {post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
          ></Post>))}
      </div>
    </div>,
    document.getElementById("ImgPortal")
  )
}

export default PostsContainer