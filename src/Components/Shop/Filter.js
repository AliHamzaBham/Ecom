import React from 'react'
import { useContext } from 'react';
import { CategoryContext } from './CategoryContext';


function Categories() {

  
  let { setCategory } = useContext(CategoryContext);

  function change(e) {
    setCategory(e.target.innerText);
  }

  let categories = ["All" , "Shirts", "Shoes", "Jackets"];
  

  return (
    
    <div className='Categories-container' style={{marginTop: "60px", textAlign:"center"}}>

      <div class="btn-group" role="group" aria-label="Basic example">

        {
        categories.map((item) => 
          <button type="button" class="btn btn-outline-secondary btn-lg cat-btn" onClick={change}>{item}
          </button>
        )}

      </div>


    </div>
  )
}

export default Categories
