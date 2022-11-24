import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import Loader from '../../components/layouts/loader/Loader';
import { baseURL } from '../../config/apiURL';


const Blog = () => {
  // const dispatch = useDispatch()
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [newData, setNewData] = useState([])

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

  useEffect(() => {
    
  }, [blogs])
  
  const handleDelete = async (blogId) =>{
    try{
       let headers = {
        Authorization: localStorage.getItem('token'),
      }
    const {
      data: {
        data: { message },
      },
    } = await axios.delete(baseURL + '/blog/' + blogId ,{headers})
    setBlogs(blogs => blogs.filter(({id}) => id !== blogId));
    setLoading(false)
  } catch (e) { }  
  }
  return (
    <div>
    <Card>
      <CardBody>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
        <CardTitle tag="h5">Blogs Listing</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Overview of the Blogs
        </CardSubtitle>
        </div>
        <div>
        <Link to="/blogs/add-new-blog">
        <Button className="btn" color="danger">Add Blog</Button>
          </Link>
        </div>
        </div>
        <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
            <tr>
              <th>Blog Image</th>
              <th>Blog Title</th>
              <th>View Blog</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
          <tr className="table-loader"><td> {loading && <Loader></Loader>}</td></tr>
            {!loading && blogs.length > 0 && blogs.map((tdata, index) => (
              <tr key={index} className="border-top">
                <td>
                  <div className="d-flex align-items-center p-2">
                    <img
                      src={tdata.image}
                      className="rounded-circle"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                  </div>
                </td>
                <td>{tdata.title}</td>
                <td><Link to={`/blogs/${tdata._id}`}><Button className="btn" outline color="info">View</Button></Link></td>
                <td>
                  <i className="bi bi-pencil-square me-3 blog-icon"></i> 
                  <i className="bi bi-trash blog-icon" onClick={()=>handleDelete(tdata._id)}></i>
                  </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </div>
  )
}

export default Blog

// import {
//   Card,
//   CardBody,
//   CardImg,
//   CardSubtitle,
//   CardText,
//   CardTitle,
//   Button,
// } from "reactstrap";

// const Blog = (props) => {
//   return (
//     <Card>
//       <CardImg alt="Card image cap" src={props.image} />
//       <CardBody className="p-4">
//         <CardTitle tag="h5">{props.title}</CardTitle>
//         <CardSubtitle>{props.subtitle}</CardSubtitle>
//         <CardText className="mt-3">{props.text}</CardText>
//         <Button color={props.color}>Read More</Button>
//       </CardBody>
//     </Card>
//   );
// };

// export default Blog;
