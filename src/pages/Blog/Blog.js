import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button, Spinner } from "reactstrap";
import DeleteModal from '../../components/layouts/DeleteModal';
import Loader from '../../components/layouts/loader/Loader';
import { baseURL } from '../../config/apiURL';
import toastOptions from '../../config/toast';


const Blog = () => {
  // const dispatch = useDispatch()
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 1;
  
  const fetchBlogs = async (currentPage = 1) => {

    try {
      let queryParams = {};
      setBlogs([])
      setLoading(true)
      let body = {
        page: currentPage,
        limit: itemsPerPage
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
      setCurrentPage(page)
      console.log({totalPages})
      setBlogs(docs)
      setLoading(false)
    } catch (e) { }
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  const handlePageClick = async (event) => {
    console.log({ event })
    let currentPage = event.selected + 1
    setCurrentPage(currentPage)
    await fetchBlogs(currentPage)
  }
  



  const [products, setProducts] = useState(blogs);

  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: ""
  });
  const idProductRef = useRef();
  const handleDialog = (message, isLoading, nameProduct) => {
    setDialog({
      message,
      isLoading,
      //Update
      nameProduct
    });
  };

  const handleDelete = (id) => {
    const index = blogs.findIndex((p) => p.id === id);
    handleDialog("Are you sure you want to delete?", true, blogs[index].title);
    idProductRef.current = id;
    console.log(index,idProductRef.current)
  };

  const areUSureDelete = async (choose) => {
    if (choose) {
      setBlogs(blogs.filter((p) => p.id !== idProductRef.current));
      try{
             let headers = {
              Authorization: localStorage.getItem('token'),
            }
          const {
            data: {
              data: { message },
            },
          } = await axios.delete(baseURL + '/blog/' + idProductRef.current ,{headers})
          toast(message,toastOptions)
          console.log(message,"message")
        } catch (e) { }  
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }

  };

  
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
          <tr className="table-loader">
            <td colSpan={4}>{loading && <Spinner>Loading...</Spinner>}</td>
          </tr>
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
                <Link to={`/blogs/edit/${tdata._id}`}> <i className="bi bi-pencil-square me-3 blog-icon"></i> </Link>
                  <i className="bi bi-trash blog-icon"  onClick={()=>handleDelete(tdata._id)}></i>
                  </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {blogs.length > 0 && (
            <div id="react-paginate">
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
              />
            </div>
          )}
      </CardBody>
    </Card>
    {dialog.isLoading && (
        <DeleteModal
          //Update
          nameProduct={dialog.title}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
    <ToastContainer/>
  </div>
  )
}

export default Blog
