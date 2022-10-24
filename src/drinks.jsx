import React from 'react'
import Fooditem from "./fooditem"
import "./assets/drinks.css"

const Drinks = () => {
  return (
    <div className="drinks__container">
      <Fooditem
     name="Soda"
        description="Your choice of soda"
        img="./images/hcue/soda.jpg"
        price="200"
        gram="10"
     />
      <Fooditem
     name="juice"
        description="Your choice of fruit juice"
        img="./images/hcue/juice.jpg"
        price="600"
        gram="10"
     />
     <Fooditem
     name="Water"
        description="sparkling water"
        img="./images/hcue/bottled_water.jpg"
        price="200"
        gram="10"
     />
    </div>
  )
}

export default Drinks