import React, { useState } from 'react'
import { useContext } from 'react';
import { CartItemContext } from '../Cart/CartItemsContext';

function CartItem(props) {

  let { item } = useContext(CartItemContext);


  function deleteItem() {
    delete item[props.name]
    props.setI(props.name);
  }


  return (
    <div>
      <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src={props.img}
                            class="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
                        </div>
                        <div class="ms-3">
                          <h5>{props.name}</h5>
                          <p class="small mb-0">{props.category}</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div style={{width: "50px"}}>
                          <input class="quantity-input" type="number" defaultValue={1}/>
                        </div>
                        <div style={{width: "80px", marginRight:"10px"}}>
                          <h5 class="mb-0">Rs. {props.price}</h5>
                        </div>
                          <span style={{color:"#8F0000", cursor:"pointer"}} onClick={deleteItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                            </svg>
                          </span>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default CartItem
