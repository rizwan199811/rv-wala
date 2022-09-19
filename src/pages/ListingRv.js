import React from 'react'

const ListingRv = () => {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div>
            <h2>RVs For Rent</h2>
            <p>See RVs For Sale</p>
            </div>
<div className='col-sm-6 col-12 col-md-4 col-xxl-3 mb-2'>
            <div className="product-card">
  <div className="badge">$109/night</div>
  <div className="product-tumb">
    <img src="https://i.imgur.com/xdbHo4E.png" alt="" />
  </div>
  <div className="product-details">
    <span className="product-catagory">Type</span>
    <h4>
     Travel Trailer
    </h4>
    <span className="product-catagory">Year</span>
    <h4>
     2016
    </h4>
    <span className="product-catagory">Make</span>
    <h4>
    Highland Ridge
    </h4>
  
    <div className="product-bottom-details">
      <div className="product-price">
        <h6>Model</h6>
        <p>Olympia Sport</p>
      </div>
    </div>
  </div>
</div>
</div>

        
        </div>
    </div>
    </>
  )
}

export default ListingRv