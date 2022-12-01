import React from 'react'
import { Card, CardBody, CardTitle,  Button, Spinner } from "reactstrap";
import {
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import toastOptions from '../../config/toast'
import JoditEditor from "jodit-react"
import { useRef } from "react"
import { useState } from 'react';
import { useDropzone } from 'react-dropzone'
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { baseURL } from '../../config/apiURL';
import upload from "../../images/upload-icon.png"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const AddBlog = () => {
  let profile = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {}
  const editor = useRef(null);
  const naviagte = useNavigate()
  const [blogs, setBlogs] = useState()
  const [loading, setLoading] = useState(false)

  const [content, setContent] = useState()
  const [title, setTitle] = useState()
  const [proceedNext, setProceedNext] = useState(true)
  const [image, setImage] = useState(upload)
//   const [post, setPost] = useState({
//     title: '',
//     content: '',
// })

// const fieldChanged = (event) => {
//   // console.log(event)
//   setPost({ ...post, [event.target.name]: event.target.value })
// }

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



const contentFieldChanaged = (data) => {
  setContent(data)
  // setPost({ ...post, 'content': data })


}
const { getRootProps, getInputProps } = useDropzone({
  accept: {
    'image/*': [],
  },
  onDrop: async (acceptedFile) => {
    await imageUpload(acceptedFile)
    // setFiles(acceptedFiles.map(file => Object.assign(file, {
    //   preview: URL.createObjectURL(file)
    // })));
  },
  multiple: false,
})

const imageUpload = async (files) => {
  try {
    setLoading(true)
    let formData = new FormData()
    files.forEach((file) => {
      formData.append('files', file)
    })
    // formData.append("files", files);
    const {
      data: { data, message },
    } = await axios.post(baseURL + '/misc/upload-file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    setProceedNext(true)
    setImage(data[0].location ? data[0].location : data[0].path)
    //   onUpload(data, 'ImageInfo')
    // setPost({ ...post, 'image': image })
    setLoading(false)
    toast.success(message, toastOptions)
    console.log({ data })
  } catch ({
    response: {
      data: { message },
    },
  }) {
    toast.error(message, toastOptions)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }
}

const handleSubmit =  async (e) => {
  try {
    setLoading(true)
    e.preventDefault()
    let headers = {
      Authorization: localStorage.getItem('token'),
    }
    let body = {
      title,
      content,
      image
    }
    const {
      data: {  message },
    } = await axios.post(baseURL + '/blog', body,{headers})
    
    toast.success(message, toastOptions)
    setTimeout(() => {
      setLoading(false)
      naviagte("/blogs")
    }, 2000);

  } catch ({
    response: {
      data: { message },
    },
  }) {
    console.log({ message })
    toast.error(message, toastOptions)
  }
}
  // console.log(post)

  return (
    <Card>
    <CardBody>  
      <CardTitle tag="h5">Add New Blogs</CardTitle>
      <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="title">Blog Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter Blog Title"
                  type="text"
                  onChange={(e)=>setTitle(e.target.value )}
                />
              </FormGroup>
              <FormGroup>
                <Label for="content">Blog Description</Label>
                <JoditEditor
			ref={editor}
			// value={post.content}
			// config={config}
      onChange={(newContent) => contentFieldChanaged(newContent)}
		/>
              </FormGroup>

              <FormGroup>
                <Label >Upload Image:</Label>
                <div {...getRootProps({ className: 'dropzone' })}>
                          {/* <i className="fa-solid fa-cloud-arrow-down fs-1"></i> */}
                          {/* <i className="fa-solid fa-pen-to-square fs-2 edit-p-pic"></i> */}
                          <input {...getInputProps()} />
                       { loading ?  (<div className="spinner-grow text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>):(<img src={image} alt="user image" width={150} height={150}/>)}
                          
                          {/* <p>
                         Click to upload
                            files
                          </p> */}
                        </div>
              </FormGroup>
              <Button type='submit' disabled={loading?true:false}>{loading?<Spinner/>:"Submit"}</Button>
            </Form>
    </CardBody>
    <ToastContainer/>
  </Card>
  )
}

export default AddBlog