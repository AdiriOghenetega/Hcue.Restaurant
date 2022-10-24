import React from 'react'
import Fooditem from "./fooditem"
import "./assets/others.css"

const Others = () => {
  return (
    <div className="others__container">
      <Fooditem
     name="Yam porrdige"
        description="Yummy Yam porridge"
        img="./images/hcue/yam_porridge.jpeg"
        price="700"
        gram="10"
     />
      <Fooditem
     name="Boiled Potatos"
        description="Boild and spiced irish potatoes"
        img="./images/hcue/boiled_potatoes.jpeg"
        price="700"
        gram="10"
     />
      <Fooditem
     name="French Fries"
        description="Crispy french fries"
        img="./images/hcue/french_fries.jpeg"
        price="400"
        gram="10"
     />
      <Fooditem
     name="Ripe Plantain"
        description="fried , diced ripe plantain"
        img="./images/hcue/ripe_plantain.jpeg"
        price="400"
        gram="10"
     />
      <Fooditem
     name="Spaghetti"
        description="stir-fried spaghetti"
        img="./images/hcue/spaghetti.jpeg"
        price="600"
        gram="10"
     />
      <Fooditem
     name="Macaroni"
        description="stir-fried macaroni"
        img="./images/hcue/macaroni.jpeg"
        price="700"
        gram="10"
     />
    </div>
  )
}

export default Others