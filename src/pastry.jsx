import React from "react";
import Fooditem from "./fooditem"
import parse from 'html-react-parser';
import "./assets/pastry.css";


const Pastry = (props) => {
  let display;
   if(props.products){
      display= props.products.map((item)=>{
         if(item.categories[0].id === 'cat_bO6J5aax75EjpK' ){
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
    <div className="pastry__container">
      {display}
    </div>
  );
};

export default Pastry;
