import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import { baseURL } from '../../config/apiURL'
import { toast, ToastContainer } from 'react-toastify'
import toastOptions from '../../config/toast'
const _ = require('lodash')

export const ImagesInfo = ({ nextStep, prevStep, onUpload }) => {
  let listObj = JSON.parse(localStorage.getItem('listObj'))
  let type = ''
  // let files = listObj && listObj.ImageInfo ? listObj.ImageInfo.files : [];
  const [proceedNext, setProceedNext] = useState(true)
  const [loadingRV, setLoadingRV] = useState(false)
  const [loadingFront, setLoadingFront] = useState(false)
  const [loadingBack, setLoadingBack] = useState(false)

  const [filesRV, setFilesRV] = useState(
    _.get(listObj, 'ImageInfo.RV.files') ? listObj.ImageInfo.RV.files : [],
  )
  const [filesLicenseBack, setFilesLicenseBack] = useState(
    _.get(listObj, 'ImageInfo.license.back.files') ? listObj.ImageInfo.license.back.files : [],
  )
  const [filesLicenseFront, setFilesLicenseFront] = useState(
    _.get(listObj,'ImageInfo.license.front.files') ? listObj.ImageInfo.license.front.files : [],
  )
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: async (acceptedFiles) => {
      console.log({ acceptedFiles, type })
      // return
      await imageUpload(acceptedFiles, type)
      // setFiles(acceptedFiles.map(file => Object.assign(file, {
      //   preview: URL.createObjectURL(file)
      // })));
    },
  })
  const imageUpload = async (files, type) => {
    try {
      let formData
      switch (type) {
        case 'RV':
          setLoadingRV(true)
          formData = new FormData()
          files.forEach((file) => {
            formData.append('files', file)
          })
          break
        case 'front':
          setLoadingFront(true)
          formData = new FormData()
          files.forEach((file) => {
            formData.append('files', file)
          })
          break
        case 'back':
          setLoadingBack(true)
          formData = new FormData()
          files.forEach((file) => {
            formData.append('files', file)
          })
          break

        default:
          break
      }
      const {
        data: { data, message },
      } = await axios.post(baseURL + '/misc/upload-file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      switch (type) {
        case 'RV':
          setFilesRV(data)
          onUpload(data, 'ImageInfo.RV.files')
          setLoadingRV(false)
          break
        case 'front':
          setFilesLicenseFront(data)
          onUpload(data, 'ImageInfo.license.front.files')
          setLoadingFront(false)
          break
        case 'back':
         setFilesLicenseBack(data)
          onUpload(data, 'ImageInfo.license.back.files')
          setLoadingBack(false)
          break

        default:
          break
      }
      setProceedNext(true)
      toast.success(message, toastOptions)
      console.log({ data })
    } catch ({
      response: {
        data: { message },
      },
    }) {
      toast.error(message, toastOptions)
      setTimeout(() => {
        setLoadingRV(false)
      }, 6000)
    }
  }

  const removeFile = async (key,type) => {
    let tempFile=[];
    switch (type) {
      case 'RV':
        tempFile = [...filesRV]
        break;
      case 'front':
        tempFile = [...filesLicenseFront]
       break;
      case 'back':
        tempFile = [...filesLicenseBack]
       break;
      default:
        break;
    }
    console.log({tempFile,key})
   
    let filtered = tempFile.filter(function (el) {
      return el.location != key
    })
    console.log({filtered});
    // return

     switch (type) {
      case 'RV':
        setFilesRV(filtered)
        onUpload(filtered, 'ImageInfo.RV.files')
        break;
      case 'front':
        setFilesLicenseFront(filtered)
        onUpload(filtered, 'ImageInfo.license.front.files')
       break;
      case 'back':
        setFilesLicenseBack(filtered)
        onUpload(filtered, 'ImageInfo.license.back.files')
       break;
      default:
        break;
    }
    
    
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
    if (filesRV.length == 0 || filesLicenseFront.length==0 || filesLicenseBack.length==0) {
      return setProceedNext(false)
    }
    setProceedNext(true)
    nextStep()
  }
  const thumbsRV = filesRV.map((file) => (
    <div style={thumb} key={file.location}>
      <div className="imageinfo-preview-div" style={thumbInner}>
        <a
          onClick={() => {
            removeFile(file.location,'RV')
          }}
        >
          {' '}
          <i class="fa-solid fa-circle-xmark"></i>
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
  const thumbsLicenseFront = filesLicenseFront.map((file) => (
    <div style={thumb} key={file.location}>
      <div className="imageinfo-preview-div" style={thumbInner}>
        <a
          onClick={() => {
            removeFile(file.location,'front')
          }}
        >
          {' '}
          <i class="fa-solid fa-circle-xmark"></i>
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
  const thumbsLicenseBack = filesLicenseBack.map((file) => (
    <div style={thumb} key={file.location}>
      <div className="imageinfo-preview-div" style={thumbInner}>
        <a
          onClick={() => {
            removeFile(file.location,'back')
          }}
        >
          {' '}
          <i class="fa-solid fa-circle-xmark"></i>
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
      <div class="form-card">
        <div class="row">
          <div class="col-7">
            <h2 class="fs-title">Photos:</h2>
          </div>
          <div class="col-5">
            <h2 class="steps">Step 6 - 8</h2>
          </div>
        </div>
        <ToastContainer />
        {/* <div class="row">
                    <div class="col-md-12 mb-3">
                      <div class="mb-3">
                        <label class="fieldlabels">Upload Photos: *</label>
                        <input
                          class="form-control"
                          type="file"
                          id="formFileMultiple"
                          multiple
                          onChange={onUpload}
                        />
                      </div>
                    </div>
                  </div> */}
        <div className="row">
          <div
            className="col-12 col-md-12"
            onClick={() => {
              type = 'RV'
            }}
          >
            <h5 className="my-2">Upload RV Photos</h5>
            <div {...getRootProps({ className: 'dropzone' })}>
              <i class="fa-solid fa-cloud-arrow-down fs-1"></i>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>

            {loadingRV && (
              <lottie-player
                src="https://assets1.lottiefiles.com/private_files/lf30_d92kodgw.json"
                background="transparent"
                speed="1"
                style={{ width: '300px', height: '300px' }}
                loop
                autoplay
              ></lottie-player>
            )}
            <aside style={thumbsContainer}>{thumbsRV}</aside>
          </div>
          <div
            className="col-12 col-md-6"
            onClick={() => {
              type = 'front'
            }}
          >
            <h5 className="my-2">Driving License Front Photo:</h5>
            <div {...getRootProps({ className: 'dropzone' })}>
              <i class="fa-solid fa-cloud-arrow-down fs-1"></i>
              <input {...getInputProps()} onClick={open} />
              <p>Drag 'n' drop , or click to select files</p>
            </div>

            {loadingFront && (
              <lottie-player
                src="https://assets1.lottiefiles.com/private_files/lf30_d92kodgw.json"
                background="transparent"
                speed="1"
                style={{ width: '300px', height: '300px' }}
                loop
                autoplay
              ></lottie-player>
            )}
            <aside style={thumbsContainer}>{thumbsLicenseFront}</aside>
          </div>
          <div
            className="col-12 col-md-6"
            onClick={() => {
              type = 'back'
            }}
          >
            <h5 className="my-2">Driving License Back Photo:</h5>
            <div {...getRootProps({ className: 'dropzone' })}>
              <i class="fa-solid fa-cloud-arrow-down fs-1"></i>
              <input {...getInputProps()} />
              <p>Drag 'n' drop , or click to select files</p>
            </div>

            {loadingBack && (
              <lottie-player
                src="https://assets1.lottiefiles.com/private_files/lf30_d92kodgw.json"
                background="transparent"
                speed="1"
                style={{ width: '300px', height: '300px' }}
                loop
                autoplay
              ></lottie-player>
            )}
            <aside style={thumbsContainer}>{thumbsLicenseBack}</aside>
          </div>
        </div>
      </div>
      <input
        type="button"
        name="next"
        class="next action-button"
        value="Next"
        onClick={validateImages}
        style={!proceedNext ? { opacity: 0.5, pointerEvents: 'none' } : {}}
      />
      <input
        type="button"
        name="previous"
        class="previous action-button-previous"
        value="Previous"
        onClick={prevStep}
      />
    </>
  )
}
