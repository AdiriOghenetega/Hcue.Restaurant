import {RiCloseLine,RiSearchLine,RiShoppingBagLine} from "react-icons/ri"
import { FaUser } from "react-icons/fa";
import {GiHamburger} from "react-icons/gi"
import {useState} from "react"
import {Link} from "react-router-dom"
import Cart from "./cart"
import "./assets/header.css"

export default function Header({cart}){
  const [bar,setBar] = useState(false)
  const [isCartVisible, setCartVisible] = useState(false);

function handleMouseEnter(){
  setCartVisible(true)
}

function handleMouseLeave(){
  setCartVisible(false)
}

  function handleBar(){
    setBar(prev=>{
      return !prev
    })
  }

    return (
        <header id="home">
      <div className="header_bars" >
      {bar ? <RiCloseLine size="20px" onClick={handleBar} /> : <GiHamburger size="35px" onClick={handleBar} />
      }</div>
      {bar && <div className="header__panel scale-up-center">
      <p><Link to="./checkout">CHECKOUT</Link></p>
      <p><Link to="./about">ABOUT US</Link></p>
      </div>}
      <div className="header__left-links-container" >
      <p><Link to="/checkout">CHECKOUT</Link></p>
      <p><Link to="/about">ABOUT US</Link></p>
      </div>
      <div className="header__img-container">
      <img src="./images/hcue_logo.png" className="header__img" />
      </div>
      <div className="header_right">
      <div><RiSearchLine className="change__color" size="22px" /></div>
      <div><FaUser size="22px" className="change__color" /></div>
      <div className="header__user-description"><p>MY ACCOUNT</p></div>
      <Link to="./cart"><div className="header__cart" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="header__cart-icon"><RiShoppingBagLine size="22px" className="change__color" />{cart !== null ? <span className="header__cart-icon_cartItems" >{cart.total_items}</span> : ''}</div>
      <div className="header__cart-description"><p>MY CART</p></div>
      </div>
      {/* <div className="header__cart_showcart" >{isCartVisible && <Cart cart={cart}  />}</div> */}
      </Link>
      </div>
        </header>
    )
}