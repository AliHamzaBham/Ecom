import React from 'react'
import { useContext } from 'react';
import { CategoryContext } from './CategoryContext';

import ProductCard from './ProductCard'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/shoes1.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'
import product5 from '../../assets/product5.jpg'

function Products() {

    let { category } = useContext(CategoryContext); // setCategory is not used

    let cat = category;

    let products = {
        product1 : {
            name: "Black Leather Jacket",
            price: 2399,
            tag1: "All size",
            tag2: "Made in Pakistan",
            tag3: "100% cotton",
            description: "Product details of RichMan- Summer Men Letter Graphic Color Block Tee & Drawstring Waist Shorts Track suit for Summer",
            img: product1,
            category: "Jackets"
        },
        product2 : {
            name: "White Sneakers",
            price: 1599,
            tag1: "All size",
            tag2: "Made in Pakistan",
            tag3: "100% cotton",
            description: "Product details of RichMan- Summer Men Letter Graphic Color Block Tee & Drawstring Waist Shorts Track suit for Summer",
            img: product2,
            category: "Shoes"

        },
        product3 : {
            name: "Nike Air Jordan 1",
            price: 5599,
            tag1: "All size",
            tag2: "Made in Pakistan",
            tag3: "",
            description: "Product details of RichMan- Summer Men Letter Graphic Color Block Tee & Drawstring Waist Shorts Track suit for Summer",
            img: product3,
            category: "Shoes"

        },
        product4 : {
            name: "Black T-shirt",
            price: 1299,
            tag1: "S,M,L",
            tag2: "Made in Pakistan",
            tag3: "High Quality",
            description: "Product details of RichMan- Summer Men Letter Graphic Color Block Tee & Drawstring Waist Shorts Track suit for Summer",
            img: product4,
            category: "Shirts"

        },
        product5 : {
            name: "White Dress Shirt",
            price: 2299,
            tag1: "S,M,L",
            tag2: "Made in Pakistan",
            tag3: "High Quality",
            description: "Product details of RichMan- Summer Men Letter Graphic Color Block Tee & Drawstring Waist Shorts Track suit for Summer",
            img: product5,
            category: "Shirts"

        }
    }
      

  return (
    <>
        <div id="added-alert-container" style={{position:"fixed", textAlign:"center", width:"100vw", top:"20px", zIndex:"99"}}>
            <div id='added-box' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>

            </div>
            
        </div>
        <div className='all-products-container'>
        {
            Object.keys(products).map((key, index) => ( 

                products[key].category === cat ?  <ProductCard name = {products[key].name} tag1={products[key].tag1} tag2={products[key].tag2} tag3={products[key].tag3} description={products[key].description} price={products[key].price} img={products[key].img} category={products[key].category}/> :

                cat === "All" && <ProductCard name = {products[key].name} tag1={products[key].tag1} tag2={products[key].tag2} tag3={products[key].tag3} description={products[key].description} price={products[key].price} img={products[key].img} category={products[key].category}/>
            ))
        }

        </div>
    </>
  )
}

export default Products
