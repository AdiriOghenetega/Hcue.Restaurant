import React from 'react'
import Fooditem from './fooditem'
import parse from 'html-react-parser';
import "./assets/soup.css"

const Soup = (props) => {
let display;
   if(props.products){
      display= props.products.map((item)=>{
         if(item.categories[0].id === 'cat_zkK6oL2MKlXn0Q' ){
            return  <Fooditem 
            key={item.id}
            name={item.name}
            description={parse(item.description)}
            img={item.image?.url}
            price={item.price.formatted_with_symbol}
            product={item}
            handleAddToCart={props.onAddToCart}
            
             />
         }
      })
   }
  return (
    <div className="soup__container">
    {display}
   
    </div>
  )
}

export default Soup