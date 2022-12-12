import "./assets/footer.css";
import {Link} from "react-router-dom"
import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import { AiFillInstagram,AiOutlineTwitter,AiFillLinkedin } from "react-icons/ai";
import {useRef} from "react"
import emailjs from '@emailjs/browser';
import Bloglist from "./bloglist";



export default function Footer() {

  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateID =import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicApi = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicApi)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  
  return (
    <div className="footer__container">
    <div className="footer__top">
    
      <Bloglist />
    
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
        <form ref={form} onSubmit={sendEmail}>
        <div className="footer__subscribe-inputs">
        <input
          type="text" 
          id="email" 
          name="email" 
          placeholder='Enter Email Address'
          className="footer__subscribe_input_text"
        />
        <input
          type="submit"
          value="SEND"
          className="footer__subscribe_input_send"
          
        />
        </div>
        </form>
      </div>
    </div>
    <div className="footer__center">
    <h4>FOLLOW US</h4>
    <div className="contact__details-socials">
            <a href="" target="blank"><AiFillInstagram size="20px" className="insta" /></a>
            <a href="" target="blank"><AiOutlineTwitter size="20px" className="twitter" /></a>
            <a href="" target="blank"><AiFillLinkedin size="20px" className="linkedin" /></a>  
            </div>
    </div>
    <div className="footer__base">
    <p>
    Copyright <span>&copy;</span> Hcue.restaurant
    </p>
    </div>
      
    </div>
  );
}
