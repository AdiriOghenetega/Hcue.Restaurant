import React from 'react'
import Fooditem from './fooditem'
import "./assets/soup.css"

const Soup = () => {
  return (
    <div className="soup__container">
    <Fooditem
     name="Egusi soup"
        description="Local egusi soup with assorted beef or chicken"
        img="./images/hcue/egusi_soup.jpeg"
        price="3000"
        gram="10"
     />
    <Fooditem
     name="Okra soup"
        description="Local okra soup with assorted beef or chicken"
        img="./images/hcue/okra_soup.jpeg"
        price="3000"
        gram="10"
     />
    <Fooditem
     name="Bitterleaf soup"
        description="Local bitterleaf soup with assorted beef or chicken"
        img="./images/hcue/bitterleaf_soup.jpeg"
        price="3000"
        gram="10"
     />
    </div>
  )
}

export default Soup