import {RiCloseLine} from "react-icons/ri"
import {GiHamburgerMenu} from "react-icons/gi"
import {useState} from "react"
import {Link} from "react-router-dom"
import "./assets/nav.css"

export default function Navbar(){
    const [navBar,setNavBar]=useState(false)

    function handleBar(){
        setNavBar(prev=>{
          return !prev
        })
      }
    return (
        <div className="navbar">
        <div className="navbar__bars" onClick={handleBar}>{navBar ? <RiCloseLine size="20px" /> : <GiHamburgerMenu size="20px" />}</div>
        
        {navBar ? <div className="navbar__panel scale-up-center">
        <RiCloseLine size="20px" onClick={handleBar} className="navbar__panel-icon" />
        <p><a href="#home">HOME</a></p>
        <p><Link to="/home">HOME</Link></p>
            <p><Link to="/category">FOOD</Link></p>
            <p><Link to="/pastry">PASTRY</Link></p>
            <p><Link to="/pizza">PIZZA</Link></p>
            <p><Link to="/productlist">MENU-LIST</Link></p>
            <p><Link to="/contact">CONTACT US</Link></p>
        </div> : <h3 className="navbar__menu-header" onClick={handleBar}>MENU</h3>}
        <div className="navbar__list-container">
            <p><Link to="/home">HOME</Link></p>
            <p><Link to="/category">FOOD</Link></p>
            <p><Link to="/pastry">PASTRY</Link></p>
            <p><Link to="/pizza">PIZZA</Link></p>
            <p><Link to="/productlist">MENU-LIST</Link></p>
            <p><Link to="/contact">CONTACT US</Link></p>
        </div>
        </div>
    )
}