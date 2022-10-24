import React from 'react'
import Fooditem from "./fooditem"
import "./assets/salad.css"
const Salad = () => {
  return (
    <div className="salad__container">
    <Fooditem
     name="Russian Salad"
        description="foreign russian salad"
        img="./images/hcue/russian_salad.jpg"
        price="1500"
        gram="10"
     />
    <Fooditem
     name="Chicken Salad"
        description="Yummy Chicken salad"
        img="./images/hcue/chicken_salad.jpg"
        price="1500"
        gram="10"
     />
    <Fooditem
     name="Avocado Salad"
        description="Exotic avocado salad"
        img="./images/hcue/avocado_salad.jpg"
        price="1500"
        gram="10"
     />
    <Fooditem
     name="Coleslaw Salad"
        description="Coleslaw salad"
        img="./images/hcue/coleslaw_salad.jpg"
        price="1500"
        gram="10"
     />
    </div>
  )
}

export default Salad