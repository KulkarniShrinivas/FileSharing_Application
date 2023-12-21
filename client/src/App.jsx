import React from 'react';
import { useRef, useState, useEffect } from 'react';
import './App.css';

function App() {
  //file is constatnt variable it is read only so directly we cant change 
  //we need setFile to make changes

  const [file, setFile,] = useState('');

  const fileInputRef = useRef();
  const logo = 'https://i.postimg.cc/fWVR4LKt/Dream-Shaper-v7-Create-a-minimalist-and-modern-background-for-a-0.jpg';

  const onUploadClick = () =>{
    fileInputRef.current.click();
  }


  return (
    <div className='container'>
      <img src={logo} alt="banner" />
      <div className='wrapper'>
        <h1>Simple File Sharing</h1>
        <p>Upload and share the download link</p>


        <button onClick={() => onUploadClick()}>Upload</button>
        <input type="file" 
          ref={fileInputRef}
          style={{
            display: 'none'
          }}
            //when u select file there the file should select and need to store we se state
            onChange={(e)=> setFile(e.target.files[0])}
        />
      </div>
    </div>
  );
}

export default App;
