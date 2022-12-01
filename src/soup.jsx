import React from 'react'
import Fooditem from './fooditem'
import Loader from "./loader/loader"
import parse from 'html-react-parser';
import "./assets/soup.css"

const Soup = (props) => {
   if(props.products.loading){
      return <Loader />
    }else if(props.products.data.length >= 1){
       let display;
          if(props.products.data){
             display= props.products.data.map((item)=>{
                if(item.categories[0].id === 'cat_zkK6oL2MKlXn0Q' ){
                   return  <Fooditem 
                   key={item.id}
                   name={item.name}
                   description={parse(item.description)}
                   img={item.image?.url}
                   price={item.price.formatted_with_symbol}
                   product={item}
                   handleAddToCart={props.onAddToCart}
                   cart={props.cart}
                    />
                }
             })
          }
         return (
           <div className="soup__container">
           {display}
          
           </div>
         )
    }else if(props.products.error){
      return <p style={{color:"red"}}>sorry there was an error . Reload Page...</p>
    }
}

export default Soup