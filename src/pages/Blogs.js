import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { baseURL } from '../config/apiURL';
// import blog1 from "../images/blog1.webp";
// import blog2 from "../images/blog2.webp";
const Blogs = () => {

  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  const itemsPerPage = 12, minDistance = 0;

  const fetchBlogs = async (currentPage = 1) => {
    try {
      let queryParams = {};
      setBlogs([])
      setLoading(true)
      let body = {
        page: currentPage,
        limit: itemsPerPage,
        searchCriteria: {
          disabled:true
        }
      }
      // let headers = {
      //   Authorization: localStorage.getItem('token'),
      // }
      const {
        data: {
          data: { docs, totalPages, limit, page },
        },
      } = await axios.post(baseURL + '/blog/list', body)
      setPageCount(totalPages)
      setBlogs(docs)
      setLoading(false)
    } catch (e) { }
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  console.log(blogs)
  return (
    <div className='container'>
<div className='row loaction-card-wrap mt-2 mb-5'>
        <div className="row m-auto booking-wrap">
        <h1 >Blogs</h1>
        
      {blogs.length > 0 && blogs.map((value,index)=>(
 <div className='col-md-4 col-sm-6 mb-3' key={index}>

 <div className="wrapper">
 <div className="card">
   <div className="card__img">
     <img src={value.image} alt="RVwala-blog" />
   </div>
   <div className="card__content">
     <h3 className="card__title">{value.title}</h3>
     <div className="card__excerpt" >
       <p></p>
       
     </div>
   </div>
   <div className="card__link">
     <Link to={`/blogs/${value._id}`}><button  className="button">Learn More</button></Link>
   </div>
 </div>
</div>
</div>
      ))}
     

{blogs.length === 0 ? "NO BLOGS FOUNS" : null}
      </div>



</div>
</div>

  )
}

export default Blogs