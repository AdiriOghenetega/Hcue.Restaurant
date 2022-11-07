import React from 'react'
import Fooditem from "./fooditem"
import parse from 'html-react-parser';
import "./assets/salad.css"
const Salad = (props) => {
   let display;
   if(props.products){
      display= props.products.map((item)=>{
         if(item.categories[0].id === 'cat_NqKE50pr35dgBL' ){
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
    <div className="salad__container">
    {display}
    </div>
  )
}

export default Salad