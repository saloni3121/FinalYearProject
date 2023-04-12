import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload.js'
import Footer from './components/Footer.js'
import Output from './components/Output';

function App() {

  const data = [
    { col1: 'Row 1, Column 1', col2: 'Row 1, Column 2' },
    { col1: 'Row 2, Column 1', col2: 'Row 2, Column 2' },
    { col1: 'Row 3, Column 1', col2: 'Row 3, Column 2' },
  ];
  const [showForm, setShowForm] = useState(true);

 

  return (
    <div className="App" style={{backgroundColor:"#000000"}}>
      <header className="App-header">
        <h2 style={{marginTop: "20px"}}>MULTI-DOCUMENT TEXT SUMMARIZATION</h2> 
        <p style={{marginTop: "0px"}}>Get a concise and summary from data collected over PDF files that are uploaded. </p><br/>
        {showForm ? (
        <FileUpload />
      ) : (
        <Output/>
      )}
      </header>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
