import React from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./assets/confirmation.css"

const Confirmation = ({order}) => {
    if (!order) {
        return <h1 style={{color:"#ED8B1B"}} >loading...</h1>
      }else{
        const navigateTo = useNavigate();
        function handleBackToHome(){
            navigateTo("/")
        }
        return (
            <div className="confirmation">
                <div className="confirmation__wrapper">
                <div className="confirmation__wrapper-message">
                    <h4>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</h4>
                    <p className="confirmation__wrapper-reference">
                        <span>Order ref:</span> {order.customer_reference}
                    </p>
                </div>
                <Link
                    className="confirmation__wrapper-back"
                    type="button"
                    to="/"
                    onClick={handleBackToHome}
                >
                    <span>Back to home</span>
                </Link>
                </div>
            </div>
          );
      
      } 
      }
  


export default Confirmation