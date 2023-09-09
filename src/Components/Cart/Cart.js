import React, { useState } from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { CartItemContext } from '../Cart/CartItemsContext';

function Cart() {


    useEffect(() => {
      document.title = "Store - Cart"
    }, []);
  
    let [i, setI] = useState(""); // just to render/change when cartItem deletes changing in cartItem delete function using setItem passing it as prop

    let { item } = useContext(CartItemContext);

    let numOfItems = Object.keys(item).length;
    let total = 0;
    let shippingFee = 200;

  return (
    <div>
      
      

      <section class="h-100 h-custom" style={{backgroundColor: "#eee"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card">
          <div class="card-body p-4">

            <div class="row">

              <div class="col-lg-7">
                <h5 class="mb-3"><Link to="/shop" class="text-body"><i class="bi bi-arrow-left-circle-fill"></i>Continue shopping</Link></h5>
                <hr/>

                <div class="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h5 class="mb-1">Your cart</h5>
                    <p class="mb-0">You have {numOfItems} items in your cart</p>
                  </div>
                  <div>
                    <p class="mb-0"><span class="text-muted">Sort by:</span> <Link href="/cart"
                        class="text-body">price <i class="fas fa-angle-down mt-1"></i></Link></p>
                  </div>
                </div>

        {
            Object.keys(item).map((key, index) => ( 
              <>
                    <CartItem setI={setI} name={item[key].name} category={item[key].category} img={item[key].img} price={item[key].price}/>
                    <div style={{display:"none"}}>{total += item[key].price}</div>
                </>
            ))
        }

              </div>
              <div class="col-lg-5">

                <div class="card bg-primary text-white rounded-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <h5 class="mb-0">Summary</h5>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        class="img-fluid rounded-3" style={{width: "45px"}} alt="Avatar"/>
                    </div>

                

                    <hr class="my-4"/>

                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Subtotal</p>
                      <p class="mb-2">Rs. {total}</p>
                    </div>

                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Shipping</p>
                      <p class="mb-2">Rs. {numOfItems > 0 ? shippingFee : 0}</p>
                    </div>

                    <div class="d-flex justify-content-between mb-4">
                      <h5 class="mb-2">Total</h5>
                      <h5 class="mb-2">Rs. {numOfItems > 0 ? total + shippingFee : 0}</h5>
                    </div>

                    <div style={{textAlign:"center"}}>
                    <button type="button" class="btn btn-info btn-block btn-lg">
                      <div class="d-flex justify-content-between">
                        <span>Place Order<i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                      </div>
                    </button>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Cart
