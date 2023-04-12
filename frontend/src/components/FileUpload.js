import React, { useState } from 'react';
import "../style/FileUpload.css"

function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState(null);

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

    alert(`You have selected ${fileCount} files with a total size of ${fileSize} bytes.`);
  };

  return (
    <div style={{}}>
      <form onSubmit={handleSubmit}>
        <label for="images" class="drop-container">
          <span class="drop-title">Drop files here</span>
          <input type="file" id="images" accept="pdf/*" required multiple onChange={handleFileSelection} /> 
        </label>  
        <br/> <br/>
        <button type="submit" class="uploadbutton"><h3>Upload Files</h3></button>
      </form>
    </div>
  );
}

export default FileUpload;
