import React from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./assets/confirmation.css"
import Loader from "./loader/loader"

const Confirmation = ({order}) => {
    if (!order.data) {
        return <Loader />
      }else if(!(order.data == [])){
        const navigateTo = useNavigate();
        function handleBackToHome(){
            navigateTo("/")
        }
        return (
            <div className="confirmation">
                <div className="confirmation__wrapper">
                <div className="confirmation__wrapper-message">
                    <h4>Thank you for your purchase, {order.data.customer.firstname} {order.data.customer.lastname}!</h4>
                    <p className="confirmation__wrapper-reference">
                        <span>Order ref:</span> {order.data.customer_reference}
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
      
      } else if(order.error){
        return <p style={{color:"red"}}>sorry there was an error . Reload Page...</p>
      }
      }
  


export default Confirmation