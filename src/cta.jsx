import "./assets/cta.css"
import {Link} from "react-router-dom"
export default function CTA(){
    return (
        <div className="cta__container">
        <h1>HAVING AN EVENT</h1>
        <Link to="/contact"><button>BOOK US NOW</button></Link>
        
        <h1>fast, easy and simple</h1>

        </div>
    )
}