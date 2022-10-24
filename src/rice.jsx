import React from 'react'
import Fooditem from "./fooditem"
import "./assets/rice.css"

const Rice = () => {
  return (
    <div className="rice__container">
      <Fooditem
     name="Vegetable Fried Rice"
        description="Yummy Inter-continental vegetable fried rice"
        img="./images/hcue/slide2.jpg"
        price="2500"
        gram="10"
     />
      <Fooditem
     name="Jollof Rice"
        description="Tasty Jollof rice"
        img="./images/hcue/jollof_rice.jpeg"
        price="2500"
        gram="10"
     />
      <Fooditem
     name="Foreign White Rice"
        description="Plain foreign white rice"
        img="./images/hcue/white_rice.jpeg"
        price="2500"
        gram="10"
     />
      <Fooditem
     name="Ofada Rice"
        description="Local ofada rice with sauce"
        img="./images/hcue/ofada_rice.jpeg"
        price="2500"
        gram="10"
     />
    </div>
  )
}

export default Rice