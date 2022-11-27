import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import { baseURL } from '../../config/apiURL'
import { toast, ToastContainer } from 'react-toastify'
import toastOptions from '../../config/toast'

export const ImagesInfo = ({ nextStep, prevStep, onUpload }) => {
  let listObj = JSON.parse(localStorage.getItem('listObj'))

  // let files = listObj && listObj.ImageInfo ? listObj.ImageInfo.files : [];
  const [proceedNext, setProceedNext] = useState(true)
  const [loading, setLoading] = useState(false)

  const [files, setFiles] = useState(
    listObj && listObj.ImageInfo ? listObj.ImageInfo.files : [],
  )
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: async (acceptedFiles) => {
      await imageUpload(acceptedFiles)
      // setFiles(acceptedFiles.map(file => Object.assign(file, {
      //   preview: URL.createObjectURL(file)
      // })));
    },
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
      setFiles(data)
      onUpload(data, 'ImageInfo')
      setLoading(false)
      toast.success(message, toastOptions)
      console.log({ data })
    } catch ({
      response: {
        data: { message },
      },
    }) {
      toast.error(message, toastOptions)
      setTimeout(()=>{
        setLoading(false)
      },6000)
      
    }
  }

  const removeFile = async (key) => {
    let tempFile = [...files]
    let filtered = tempFile.filter(function (el) {
      return el.filename != key
    })
    setFiles(filtered)
    onUpload(filtered, 'ImageInfo')
  }
  // onDrop:onUpload
  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  }

  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
  }

  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
  }

  const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
  }
  const validateImages = () => {
    if (files.length == 0) {
      return setProceedNext(false)
    }
    setProceedNext(true)
    nextStep()
  }
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.filename}>
      <div className="imageinfo-preview-div" style={thumbInner}>
        <a
          onClick={() => {
            removeFile(file.filename)
          }}
        >
          {' '}
          <i className="fa-solid fa-circle-xmark"></i>
        </a>
        <img
          src={file.path ? file.path : file.location}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.path ? file.path : file.location)
          }}
        />
      </div>
    </div>
  ))
  return (
    <>
      <div className="form-card">
        <div className="row">
          <div className="col-7">
            <h2 className="fs-title">Photos:</h2>
          </div>
          <div className="col-5">
            <h2 className="steps">Step 6 - 8</h2>
          </div>
        </div>
        <ToastContainer />
        {/* <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="mb-3">
                        <label className="fieldlabels">Upload Photos: *</label>
                        <input
                          className="form-control"
                          type="file"
                          id="formFileMultiple"
                          multiple
                          onChange={onUpload}
                        />
                      </div>
                    </div>
                  </div> */}
        <div {...getRootProps({ className: 'dropzone' })}>
          <i className="fa-solid fa-cloud-arrow-down fs-1"></i>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>

        {loading && (
          <lottie-player
            src="https://assets1.lottiefiles.com/private_files/lf30_d92kodgw.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          ></lottie-player>
        )}
        <aside style={thumbsContainer}>{thumbs}</aside>
      </div>
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Next"
        onClick={validateImages}
        style={!proceedNext ? { opacity: 0.5, pointerEvents: 'none' } : {}}
      />
      <input
        type="button"
        name="previous"
        className="previous action-button-previous"
        value="Previous"
        onClick={prevStep}
      />
    </>
  )
}
