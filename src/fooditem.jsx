import { useState, useEffect } from "react";
import Loader from "./loader/loader"
import "./assets/fooditem.css";

export default function Fooditem({
  product,
  img,
  name,
  description,
  handleAddToCart,
  cart
}) {
 

  const onAddToCart = (itemid, quantity,variantData) => {
    handleAddToCart(itemid, quantity,variantData);
  };
 
  const productVariants = product.variant_groups

  const [variantData,setVariantData]= useState(createVariantData())

 
  
 
  let displayVariants 
  if(productVariants){
    displayVariants = productVariants.map((item,index)=>{
      const individualOptions = item.options.map((item,index)=> {
        return <option key={index} id={item.id} >{item.name}</option>
      })
      return <div key={index}>
       <label htmlFor={item.name}>{item.name}</label>
      <select
       id={item.name}
       onChange={handleSelectChange}
       >
       <option default>choose</option>
        {individualOptions}
      </select>
      </div>
    })
  }

  function handleSelectChange(e){
    const {value} = e.target
    
   let optionId ;
    productVariants.map((item,index)=>{
      return item.options.map((item,index)=> {
        if(value === item.name){
          optionId = item.id
        }  
      })
    })
    
    productVariants.map((item,index)=>{
      if(item.options.map(item=>item.id).includes(optionId)){
        setVariantData(prev=>{
          return {
            ...prev,
            [item.id] : optionId
          }
        })
      }
    })
    
  }
  
  function createVariantData(){
    if(product.variant_groups.length > 0 ){
      const individualVariants= productVariants.map((item,index)=>{
        return `${item.id}` 
      })
      if(individualVariants.length < 2){
        const [a]=individualVariants
        return {
          [a]:""
        }
      }
      else if(individualVariants.length < 3){
        const [a,b] = individualVariants
      return {
        [a] : "",
        [b]: ""
      }
      }else if(individualVariants.length < 4){
        const [a,b,c]=individualVariants
        return {
          [a]:"",
          [b] : "",
          [c]: ""
        }
      }else if(individualVariants.length < 5){
        const [a,b,c,d]=individualVariants
        return {
          [a]:"",
          [b] : "",
          [c]: "",
          [d]: ""
        }
      }
    }else{
      return null
    }  
  }

  
  

  return (
    <div className="snack__container">
      <div className="snack__photo">
        <img src={img} width="200px" height="200px" />
      </div>
      <div className="snack__details">
        <h3>{name}</h3>
        <p>{description}</p>
       {product.variant_groups.length > 0 && <div className="snack__variants">
          {displayVariants}
          <small>choose an option before adding to cart</small>
        </div>}
      </div>
      <div className="snack__btn-container">
        {cart.loading ? <Loader /> : <button
          name="Add to cart"
          className="product__btn"
          onClick={() => onAddToCart(product.id, 1,variantData)}
        >
          add to cart
        </button>}
        {cart.error && <p>Error...choose an option</p>}
      </div>
    </div>
  );
}
