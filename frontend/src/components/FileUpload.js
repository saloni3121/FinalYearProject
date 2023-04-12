import React, { useState } from 'react';
import Output from "./Output.js";
import "../style/FileUpload.css";
import Loading from "react-loading";

function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [showForm, setShowForm] = useState('form');
  const [showLoading, setShowLoading] = useState(true);

  
  const handleFileSelection = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fileCount = selectedFiles.length;
    let fileSize = 0;

    for (let i = 0; i < fileCount; i++) {
      fileSize += selectedFiles[i].size;
    }

    setShowForm('loading');
    setTimeout(() => {
      // showLoading(false)
      setShowForm('output');
    }, 5000);

    // setShowForm(false)
    alert(`You have selected ${fileCount} files with a total size of ${fileSize} bytes.`);
    };

  return (
    
      showForm==='form' ?(
      <div>
      <form onSubmit={handleSubmit}>
        <label for="images" class="drop-container">
          <span class="drop-title">Drop files here</span>
          <input type="file" id="images" accept="pdf/*" required multiple onChange={handleFileSelection} /> 
        </label>  
        <br/> <br/>
        <button type="submit" class="uploadbutton"><h3>Upload Files</h3></button>
      </form>
    </div>
    ) : showForm==='loading' ? (<Loading type="spin" color="#ffffff" height={20} width={20} />):(
      <Output/>
    )

  );
}

export default FileUpload;
