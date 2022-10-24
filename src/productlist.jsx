import React from 'react'
import Fooditem from "./fooditem"
import "./assets/productlist.css"
import parse from 'html-react-parser';



const ProductList = (props) => {
  
  let display;
 
    display = props.products.map((item) => {
        return <Fooditem 
        key={item.id}
        name={item.name}
        description={parse(item.description)}
        img={item.image?.url}
        price={item.price.formatted_with_symbol}
        product={item}
        handleAddToCart={props.onAddToCart}
        
         />
    })

    
  
  return (
    <div className='productlist__container'>
    <h1>ALL MEALS</h1>
    <div className='productlist__products'>
    {display}
    </div>
    </div>
  )
}

export default ProductList