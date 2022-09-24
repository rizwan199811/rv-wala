import React,{useState} from "react";
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import { baseURL } from "../../config/apiURL";
import { toast,ToastContainer } from 'react-toastify';
import toastOptions from "../../config/toast";

export const ImagesInfo = ({ nextStep, prevStep, onUpload }) => {
  let listObj = JSON.parse(localStorage.getItem("listObj"))
  // let files = listObj && listObj.ImageInfo ? listObj.ImageInfo.files : [];
  const [proceedNext, setProceedNext] = useState(true);
  const [files, setFiles] = useState(listObj && listObj.ImageInfo ? listObj.ImageInfo.files : []);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: async (acceptedFiles) => {
       await imageUpload(acceptedFiles)
      // setFiles(acceptedFiles.map(file => Object.assign(file, {
      //   preview: URL.createObjectURL(file)
      // })));
    }
  });
  const imageUpload =async (files)=>{
    try{
      let formData = new FormData();
      files.forEach(file=>{
        formData.append("files", file);
      });
      // formData.append("files", files);
      const {
        data: { data ,message},
      } = await axios.post(baseURL + '/misc/upload-file', formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      setProceedNext(true);
      setFiles(data)
      onUpload(data,'ImageInfo');
      toast.success(message,toastOptions);
      console.log({data})
    }
    catch({response :{ data :{message}}}){

      toast.error(message, toastOptions
        );
    }
  
  }

  const removeFile= async ( key )=>{
    let tempFile =[...files];
    let filtered = tempFile.filter(function(el) { return el.filename != key; });
    setFiles(filtered) 
    onUpload(filtered,'ImageInfo');
  }
  // onDrop:onUpload
  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };
  const validateImages =( )=>{
    if(files.length==0){
     return setProceedNext(false)
    }
    setProceedNext(true);
    nextStep()
  }
  const thumbs = files.map(file => (
    <div style={thumb} key={file.filename}>
      <div className="imageinfo-preview-div" style={thumbInner}>
     <a onClick={()=>{removeFile(file.filename)}}> <i class="fa-solid fa-circle-xmark"></i></a>
        <img
          src={file.path}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.path) }}
        />
      </div>
    </div>
  ));
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
        <ToastContainer/>
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
        <div {...getRootProps({ className: "dropzone" })}>
        <i class="fa-solid fa-cloud-arrow-down fs-1"></i>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </div>
      <input
        type="button"
        name="next"
        class="next action-button"
        value="Next"
        onClick={validateImages}
        style={!proceedNext ? { opacity: 0.5, pointerEvents: "none" } : {}}
      />
      <input
        type="button"
        name="previous"
        class="previous action-button-previous"
        value="Previous"
        onClick={prevStep}
      />
      
    </>
  );
};
