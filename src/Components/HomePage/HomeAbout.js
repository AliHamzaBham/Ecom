import React from 'react'

function HomeAbout() {
    let rightImg = "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";

  return (
    <div className='Home-About'>
      <div className="left">
        <h5>About Us</h5>
        <h2>Connecting People, <br/> One Cart At A Time</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto consectetur corporis? Doloremque aut asperiores omnis expedita temporibus, facere deleniti corporis dicta nulla odit nostrum praesentium assumenda, optio eos eligendi officiis qui suscipit aliquid ullam unde tempore nobis soluta neque!</p>
        <button className='About-us-btn'>About Us</button>
      </div>
      <div className="right">
        <img src={rightImg} alt="" />
      </div>
    </div>
  )
}

export default HomeAbout
