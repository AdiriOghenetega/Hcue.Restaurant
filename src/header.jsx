import { RiCloseLine, RiSearchLine, RiShoppingBagLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./cart";
import "./assets/header.css";

export default function Header({ cart }) {
  const [bar, setBar] = useState(false);
  const [isCartVisible, setCartVisible] = useState(false);

  function handleMouseEnter() {
    setCartVisible(true);
  }

  function handleMouseLeave() {
    setCartVisible(false);
  }

  function handleBar() {
    setBar((prev) => {
      return !prev;
    });
  }

  return (
    <header id="home">
      <div className="header_bars">
        {bar ? (
          <RiCloseLine size="20px" onClick={handleBar} />
        ) : (
          <GiHamburger size="35px" onClick={handleBar} />
        )}
      </div>
      {bar && (
        <div className="header__panel scale-up-center">
          <div>
            <p>
              <Link to="./checkout">CHECKOUT</Link>
            </p>
          </div>
          <div>
            <p>
              <Link to="./about">ABOUT US</Link>
            </p>
          </div>
          {/* <div className="change__color">
            <RiSearchLine size="22px" />
          </div>
          <div className="change__color">
            <FaUser size="22px" />
          </div> */}
        </div>
      )}
      <div className="header__left-links-container">
        <p>
          <Link to="/checkout">CHECKOUT</Link>
        </p>
        <p>
          <Link to="/about">ABOUT US</Link>
        </p>
      </div>

      <div className="header__img-container">
        <Link to="/">
          {" "}
          <img src="./images/hcue_logo.png" className="header__img" />
        </Link>
      </div>
      <div className="header_right">
        {/* <div className="header_right_search-icon change__color">
          <RiSearchLine size="22px" />
        </div>
        <div className="header_right_user-icon change__color">
          <FaUser size="22px" />
        </div>
        <div className="header__user-description">
          <p>MY ACCOUNT</p>
        </div> */}
        <Link to="./cart">
          <div
            className="header__cart"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="header__cart-icon">
              <RiShoppingBagLine size="22px" className="change__color" />
              {cart.data.total_items !== null ? (
                <span className="header__cart-icon_cartItems">
                  {cart.data.total_items}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="header__cart-description">
              <p>MY CART</p>
            </div>
          </div>
          {/* <div className="header__cart_showcart" >{isCartVisible && <Cart cart={cart}  />}</div> */}
        </Link>
      </div>
    </header>
  );
}
