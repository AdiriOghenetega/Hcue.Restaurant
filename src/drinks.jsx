import React from 'react'
import Fooditem from "./fooditem"
import parse from 'html-react-parser';
import "./assets/drinks.css"

const Drinks = (props) => {
   let display;
   if(props.products){
      display= props.products.map((item)=>{
         if(item.categories[0].id === 'cat_Op1YoVyzVwXLv9' ){
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
    <div className="drinks__container">
      {display}
    </div>
  )
}

export default Drinks