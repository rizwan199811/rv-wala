import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { baseURL } from '../config/apiURL';
import blog2 from "../images/blog2.webp";


const BlogDetails = () => {
  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState()

  const { id } = useParams()
  const fetchBlogsById = async () => {
    try {
      setLoading(true)
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      const {
        data: { data },
      } = await axios.get(baseURL + '/blog/' + id, { headers })
      console.log({ data })
      setBlogs(data)

      setLoading(false)
    } catch (e) {}
  }
  useEffect(() => {
    fetchBlogsById()
  }, [id])
  console.log(blogs)

  return (
   <div className='blog-detail-wrapper'>
   <div>
    <img src={blogs&&blogs.image} alt='blog-image' className='w-100'/>
   </div>
   <div className='container my-4'>
    <div className='row my-5'>
        <div dangerouslySetInnerHTML={{__html:blogs&&blogs.content}}>

        </div>

    </div>

   </div>
   </div>
  )
}

export default BlogDetails