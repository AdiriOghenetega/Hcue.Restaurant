import React from "react";
import { Link } from "react-router-dom";
import "./assets/cart.css";
import CartItem from "./cartItem"




const Cart = (props) => {
  
  let renderEmptyMessage, renderItems, renderTotal;
  
 
  renderEmptyMessage = () => {
    if (props.cart.total_unique_items > 0) {
      return;
    }
    
    return (
      <p className="cart__none">
          You have no items in your shopping cart, start adding some!
        </p>
      );
    };

    console.log(props.cart.line_items)
    
    if (props.cart.line_items) {
      renderItems = () =>
      props.cart.line_items.map((lineItem) => (
        <CartItem item={lineItem} key={lineItem.id} onUpdateCartQty={props.onUpdateCartQty} onRemoveFromCart={props.onRemoveFromCart} className="cart__inner" />
      ));
    } else {
      return <h1 style={{color: "#ED8B1B"}}>loading...</h1> 
    }
    
      renderTotal = () => (
        <div className="cart__total">
        <p className="cart__total-title">Subtotal:</p>
        <p className="cart__total-price">
          {props.cart.subtotal.formatted_with_symbol}
        </p>
      </div>
    );
    
    const handleEmptyCart = () => {
      props.onEmptyCart();
    }
    return (
      <div className="cart__container">
      { (
        <div className="cart__main">
          {renderEmptyMessage()}
          <div className="cart__product">{renderItems()}</div>
          <div className="cart__sumtotal">{renderTotal()}</div>
          <div className="cart__checkout">
            <Link to="/productlist">
              <button className="cart__checkout-button">
                CONTINUE SHOPPING
              </button>
            </Link>
            <button className="cart__checkout-button" onClick={handleEmptyCart}>EMPTY CART</button>
            <Link to="/checkout">
              <button className="cart__checkout-button">CHECKOUT</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
 
};

export default Cart;
