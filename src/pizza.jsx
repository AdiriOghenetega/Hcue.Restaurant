import React from 'react'
import Fooditem from "./fooditem"
import parse from 'html-react-parser';
import "./assets/pizza.css"

const Pizza = (props) => {
   let display;
   if(props.products){
      display= props.products.map((item)=>{
         if(item.categories[0].id === 'cat_A12JwrrQRwPjnk' ){
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
    <div className="pizza__container">
    {display}
    </div>
  )
}

export default Pizza