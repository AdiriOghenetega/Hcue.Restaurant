import { useState, useEffect} from "react";
import "./assets/fooditem.css";


export default function Fooditem({ product,img, name, description, price,handleAddToCart }) {

  const variant = product.variant_groups.map(group => group)
    
  const optionId = product.variant_groups.map(group => group.options.map(option=>option.id))
  let options,variantName,variantNameTwo,optionsTwo,variantId1,variantId2

  if(product.variant_groups.length){
    variantName=product.variant_groups[0].name
    options = product.variant_groups[0].options
   
  }else{
    return null , console.log(null)
  }
  
  // if(product.variant_groups){
  //   variantId1 = product.variant_groups[0].id 
  //   variantId2 = product.variant_groups[1].id
  // }
  const [variantDetails,setVariantDetails] = useState({
    variantId1 : variantId1, 
    varaintId2 : variantId2,
    optionId1: "",
    optionId2: ""
  })
  
  
  console.log(product.variant_groups[0].id)
  
  const onAddToCart = (itemid,quantity,variant) => {
    handleAddToCart(itemid, quantity,variant);
  }
  
  
  // if(variant){
  //   optionsId = variant.map(group=> group.options.map(option=>option.id))
  // }else{
  //   return <h1>loading...</h1>
  // }
  

  if(product.variant_groups.length > 1){
    variantNameTwo=product.variant_groups[1].name
    optionsTwo = product.variant_groups[1].options
  }else{
    return null , console.log(null)
  }
//  console.log(options)
  // const getVariants= (productId)=>{
  //   commerce.products.getVariants(productId).then((variants) => console.log(variants.data)).catch((error) => {
  //     console.log('There was an error retrieving the variants', error);
  //   });;
  // }

  // useEffect(()=>{
  //   if(product.id){
  //     getVariants(product.id)
  //   } 
  // },[])

 
  return (
    <div className="snack__container">
      <div className="snack__photo">
        <img src={img} width="200px" height="200px" />
      </div>
      <div className="snack__details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="snack__price">
          <h4>
            {price} 
          </h4>
        </div>
        <div className="snack__price">
          <label htmlFor="options1">
            {variantName} :  
          </label>
          <select name="options1" >
            <option disabled>Select</option>
            {options.map(option => <option>{option.name}</option>)}
          </select>
        </div>
        <div className="snack__price">
          <label htmlFor="options2">
            {variantNameTwo} :  
          </label>
          <select name="options2" >
            <option disabled>Select</option>
            {optionsTwo.map(option => <option>{option.name}</option>)}
          </select>
        </div>
      </div>
      <div className="snack__btn-container">
        <button
          name="Add to cart"
          className="product__btn"
          onClick={()=>onAddToCart(product.id,1,{"vgrp_4OANwR12alvYL8" : 'optn_8XO3wpdWZZwYAz',"vgrp_yA6nldJKWoEWbz": "optn_zkK6oLK9zKwXn0" })}
        >
        add to cart
        </button>
      </div>
    </div>
  );
}
