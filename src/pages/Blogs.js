import React from 'react'
import blog1 from "../images/blog1.webp";
import blog2 from "../images/blog2.webp";
const Blogs = () => {
  return (
    <div className='container'>
<div className='row loaction-card-wrap mt-2 mb-5'>
        <div className="row m-auto">

<div className='col-md-4 col-sm-6 mb-3'>

        <div className="wrapper">
        <div className="card">
          <div className="card__img">
            <img src={blog1} />
          </div>
          <div className="card__content">
            <h3 className="card__title">What Is The Cheapest Way To Rent An RV?</h3>
            <div className="card__excerpt">
              <p>The absolute cheapest way to rent an RV is to rent through RVnGO. They don’t charge ANY transaction..</p>
            </div>
          </div>
          <div className="card__link">
            <a  className="button">Learn More</a>
          </div>
        </div>
      </div>
      </div>

      <div className='col-md-4 col-sm-6 mb-3'>

        <div className="wrapper">
        <div className="card">
          <div className="card__img">
            <img src={blog2} />
          </div>
          <div className="card__content">
            <h3 className="card__title">Getting Insurance for An RV Rental</h3>
            <div className="card__excerpt">
              <p>Every year there are thousands of Americans who make like Steppinwolf Steppinwolf Steppinwolf...</p>
            </div>
          </div>
          <div className="card__link">
            <a  className="button">Learn More</a>
          </div>
        </div>
      </div>
      </div>

      <div className='col-md-4 col-sm-6 mb-3'>

        <div className="wrapper">
        <div className="card">
          <div className="card__img">
            <img src={blog1} />
          </div>
          <div className="card__content">
            <h3 className="card__title">How To Choose Between A Class A or Class C RV</h3>
            <div className="card__excerpt">
              <p>Purchasing or renting an RV is an exciting experience for many people who love adventure...</p>
            </div>
          </div>
          <div className="card__link">
            <a  className="button">Learn More</a>
          </div>
        </div>
      </div>
      </div>
          
      </div>



</div>
</div>

  )
}

export default Blogs