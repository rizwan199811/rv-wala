import React,{useState} from "react";
import {useDropzone} from 'react-dropzone';

export const ImagesInfo = ({ nextStep, prevStep, onUpload }) => {
  let listObj = JSON.parse(localStorage.getItem("listObj"))
  let files = listObj && listObj.ImageInfo ? listObj.ImageInfo.files : []
  // const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      let files = acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))
        onUpload(files,'ImageInfo');
      // setFiles(acceptedFiles.map(file => Object.assign(file, {
      //   preview: URL.createObjectURL(file)
      // })));
    }
  });
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
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
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
            <h2 class="steps">Step 5 - 7</h2>
          </div>
        </div>
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
        onClick={nextStep}
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
