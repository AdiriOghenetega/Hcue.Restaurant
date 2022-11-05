import { useState, useEffect } from "react";
import "./assets/fooditem.css";

export default function Fooditem({
  product,
  img,
  name,
  description,
  price,
  handleAddToCart,
}) {
  

  const onAddToCart = (itemid, quantity) => {
    handleAddToCart(itemid, quantity);
  };

 

  return (
    <div className="snack__container">
      <div className="snack__photo">
        <img src={img} width="200px" height="200px" />
      </div>
      <div className="snack__details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="snack__price">
          <h4>{price}</h4>
        </div>
      </div>
      <div className="snack__btn-container">
        <button
          name="Add to cart"
          className="product__btn"
          onClick={() => onAddToCart(product.id, 1)}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
