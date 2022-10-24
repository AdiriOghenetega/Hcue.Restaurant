import React from 'react'
import Fooditem from "./fooditem"
import "./assets/proteins.css"

const Proteins = () => {
  return (
    <div className="proteins__container">
      <Fooditem
     name="Chicken"
        description="Assorted Chicken"
        img="./images/hcue/chicken.jpeg"
        price="750"
        gram="10"
     />
      <Fooditem
     name="Fish"
        description="Delicious fried fish"
        img="./images/hcue/fish.jpeg"
        price="1750"
        gram="10"
     />
      <Fooditem
     name="Beef"
        description="Assorted Beef"
        img="./images/hcue/beef.jpeg"
        price="700"
        gram="10"
     />
      <Fooditem
     name="Prawns"
        description="deep fried butterfly prawns"
        img="./images/hcue/prawns.jpeg"
        price="950"
        gram="10"
     />
    </div>
  )
}

export default Proteins