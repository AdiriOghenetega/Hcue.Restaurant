import React from 'react'
import { useState } from "react";
import "./assets/bloglist.css"
import {RiSkipBackMiniLine,RiSkipForwardMiniLine} from "react-icons/ri";




function Bloglist() {

    const [blogIndex, setBlogIndex] = useState(0);
    const [myBlog, setMyBlog] = useState(blogDetails());

  

    function blogDetails() {
      return [
        {
          article:
            "The service was heartwarming and professional,without being pushy.Nice work, you're doing well!",
          author: "Bimbo Joseph",
        },
        {
          article:
            "The waitress recommended their standard Amala meal and it was amazing...everyone should try it",
          author: "Oluwaseun Ademola",
        },
        {
          article:
            "Great place! The food is traditional and good and the service is even better . I particularly liked the salad, it was so fresh",
          author: "Stephanie Ibinabo",
        },
      ];
    }
  
    const blogDisplay = myBlog.map((item, index) => {
      return <div key={index} className='blog__container' >
      <div className="blog__title">
          <h3>REVIEWS</h3>
      </div>
      <div className="blog__article">
          <p>{item.article}</p>
      </div>
      <div className="blog__author">
      <h4>{item.author}</h4>
      </div>

  </div>
    });
    const blogNav = myBlog.map((item, index) => {
      return <div key={index} className="footer__blog_nav" onClick={()=>handleBlogBoxClick(index)} style={{background: index === blogIndex ? "linear-gradient(90deg, rgba(130, 238, 153, 1) 0%, rgba(255, 235, 59, 1) 34%, rgba(237, 139, 27, 1) 62%)" : "gray"}}></div>;
    });
  
    function handleBlogBoxClick(index){
      setBlogIndex(index)
    }

function handleLeft(){
  if(blogIndex <= 0){
    setBlogIndex(myBlog.length - 1)
  }else{
    setBlogIndex(prev=>prev - 1)
  }
}
function handleRight(){
  if(blogIndex >= myBlog.length - 1){
    setBlogIndex(0)
  }else{
    setBlogIndex(prev=>prev + 1)
  }
}


  return (
    <div className="footer__blog">
    <div className="footer__blog-articles" >
    <div className="arrow-left" onClick={handleLeft}><RiSkipBackMiniLine size="25px" /></div>
        {blogDisplay[blogIndex]}
    <div className="arrow-right" onClick={handleRight}><RiSkipForwardMiniLine size="25px" /></div>
    </div>
        <div className="footer__blog_nav-container">{blogNav}</div>
      </div>
  )
}

export default Bloglist