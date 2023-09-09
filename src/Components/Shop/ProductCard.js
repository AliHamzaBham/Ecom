import React from 'react'
import { useContext } from 'react';
import { CartItemContext } from '../Cart/CartItemsContext';

function ProductCard(props) {

  let { item} = useContext(CartItemContext);

  let lastProduct = {
    name: props.name,
    price: props.price,
    tag1: props.tag1,
    tag2: props.tag2,
    tag3: props.tag3,
    description: props.description,
    img: props.img,
    category: props.category
  }

  function add() {
    item[props.name] = lastProduct;
    //code goes here
    const msg = document.querySelector('#added-box');
      msg.innerHTML = "";
      msg.innerHTML += `<div class="alert alert-success added-msg" role="alert">
        ${props.name} added to cart
    </div>`;
      setTimeout(function(){
        //code goes here
        msg.innerHTML = "";
     }, 3000)
  }

  return (
    <>
    <div className='Product-card'>
        <div className='product-img-container'>

            <img src={props.img} alt="T-shirt" />
        </div>

        <div className='product-text-container'>
            <h3>{props.name}</h3>
            <span>{props.category}</span>
            <h5>Rs. {props.price}</h5>

            <div className='add-to-cart-btn-conatiner'>
                <button class="btn btn-outline-primary btn-md mt-2 w-100"  type="button" onClick={add} data-toggle="modal" data-target="#exampleModal">
                    Add to Cart
                  </button>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default ProductCard
