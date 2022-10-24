import React from 'react'
import Fooditem from "./fooditem"
import "./assets/pizza.css"

const Pizza = () => {
  return (
    <div className="pizza__container">
    <Fooditem
     name="Chicken Pizza"
        description="scrumptous chicken pizza"
        img="./images/hcue/chicken_pizza.jpg"
        price="6000"
        gram="10"
     />
    <Fooditem
     name="Beef Pizza"
        description="Delicious beef pizza"
        img="./images/hcue/beef_pizza.jpg"
        price="5500"
        gram="10"
     />
    <Fooditem
     name="Pineapple Pizza"
        description="Special Pineapple pizza"
        img="./images/hcue/pineapple_pizza.jpg"
        price="4000"
        gram="10"
     />
    <Fooditem
     name="Mixed Pizza"
        description="Exotic mixed pizza"
        img="./images/hcue/mixed-pizza.jpg"
        price="1000"
        gram="10"
     />
    </div>
  )
}

export default Pizza