import React from 'react'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <div className='CTA'>
      <h1 style={{textAlign:"center"}}>GET YOURSELF EQUIPPED!</h1>
      <Link to="/shop">
        <button className='About-us-btn'>Shop Now</button>
      </Link>
    </div>
  )
}

export default CTA
