import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notFound_wrapper'>
    <div id="background" />
    <div className="top">
      <h1>404</h1>
      <h3>page not found</h3>
    </div>
    <div className="container">
      <div className="ghost-copy">
        <div className="one" />
        <div className="two" />
        <div className="three" />
        <div className="four" />
      </div>
      <div className="ghost">
        <div className="face">
          <div className="eye" />
          <div className="eye-right" />
          <div className="mouth" />
        </div>
      </div>
      <div className="shadow" />
    </div>
    <div className="bottom">
      <div className="buttons">
        {/* <button className="btn">Back</button> */}
        <Link to="/"><button className="btn">Go To Home</button></Link>
      </div>
    </div>
  </div>
  
  )
}

export default NotFound