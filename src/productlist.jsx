import React from 'react'
import Fooditem from "./fooditem"
import "./assets/productlist.css"
import parse from 'html-react-parser';
import Loader from "./loader/loader"



const ProductList = (props) => {
  if(props.products.loading){
    return <Loader />
  }else if(props.products.data.length >= 1){
    let display;
   
      display = props.products.data.map((item) => {
          return <Fooditem 
          key={item.id}
          name={item.name}
          description={parse(item.description)}
          img={item.image?.url}
          price={item.price.formatted_with_symbol}
          product={item}
          handleAddToCart={props.onAddToCart}
          cart={props.cart}
          
           />
      })
  
      
    
    return (
      <div className='productlist__container'>
      <h3>ALL MEALS</h3>
      <div className='productlist__products'>
      {display}
      </div>
      </div>
    )
    
  }else if(props.products.error){
    return <p style={{color:"red"}}>sorry there was an error . Reload Page...</p>
  }
}

export default ProductList