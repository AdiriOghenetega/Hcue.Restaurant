import "./assets/footer.css";
import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import Blog from "./blog";
import { useState } from "react";


export default function Footer() {
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
    return <Blog key={index} article={item.article} author={item.author} />;
  });
  const blogNav = myBlog.map((item, index) => {
    return <div key={index} className="footer__blog_nav" onClick={()=>handleBlogBoxClick(index)} style={{backgroundColor: index === blogIndex ? "rgb(237,139,27)" : "gray"}}></div>;
  });

  function handleBlogBoxClick(index){
    setBlogIndex(index)
  }
  return (
    <div className="footer__container">
    <div className="footer__top">
    <div className="footer__blog">
        {blogDisplay[blogIndex]}
        <div className="footer__blog_nav-container">{blogNav}</div>
      </div>
      <div className="footer__contact">
        <div className="footer__contact_title">
          <h1>CONTACT INFORMATION</h1>
        </div>
        <div className="footer__details">
          <div className="footer__contact_icons">
            <MdLocationPin size="20px" />
            <MdPhone size="20px" />
            <MdEmail size="20px" />
          </div>
          <div className="footer__contact_details">
            <span>Abuloma, Portharcourt</span>
            <span>+2348142604385</span>
            <span>tegaadiri3@yahoo.com</span>
          </div>
        </div>
      </div>
      <div className="footer__subscribe">
        <h1>GET TIPS</h1>
        <p>
          Get updates on latest discount,coupons,new products & How to eat
          healthy
        </p>
        <input
          type="text"
          className="footer__subscribe_input_text"
          placeholder="Enter your email"
        />
        <input
          type="submit"
          value="SEND"
          className="footer__subscribe_input_send"
        />
      </div>
    </div>
    <div className="footer__center">
    <a href="#followus">FOLLOW US</a>
    <a href="#payment">PAYMENT METHOD</a>
    </div>
    <div className="footer__base">
    <p>
    Copyright <span>&copy;</span> Adiri Oghenetega
    </p>
    </div>
      
    </div>
  );
}