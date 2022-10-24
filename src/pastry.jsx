import React from "react";
import Fooditem from "./fooditem"
import "./assets/pastry.css";


const Pastry = () => {
  return (
    <div className="pastry__container">
      <Fooditem
        name="Bread"
        description="Delicious sweet bread"
        img="./images/hcue/bread.jpg"
        price="1000"
        gram="10"
      />
      <Fooditem
        name="Cakes"
        description="Delicious sweet cakes"
        img="./images/hcue/cake.jpg"
        price="5000"
        gram="10"
      />
      <Fooditem
        name="Croissants"
        description="buttery croissants"
        img="./images/hcue/croissant.jpg"
        price="9000"
        gram="10"
      />
      <Fooditem
        name="Cookies"
        description="Crunchy cookies"
        img="./images/hcue/cookies.jpg"
        price="2500"
        gram="10"
      />
      <Fooditem
        name="Pretzels"
        description="Yummy Pretzels"
        img="./images/hcue/pretzels.jpg"
        price="7000"
        gram="10"
      />
    </div>
  );
};

export default Pastry;
