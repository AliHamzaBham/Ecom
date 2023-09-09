import React from 'react'
import { useEffect, useState } from 'react';
import { CategoryContext } from './CategoryContext';

import ShopHero from './ShopHero'
import Products from './Products';
import Filter from './Filter'

function Shop() {

  const [category, setCategory] = useState("All");

    useEffect(() => {
        document.title = "Store - Shop"
      }, []);

  return (
    <div className='Shop'>
      <ShopHero/>
      <CategoryContext.Provider value={{ category, setCategory }}>
        <Filter/>
        <Products/>
      </CategoryContext.Provider>
    </div>
  )
}

export default Shop
