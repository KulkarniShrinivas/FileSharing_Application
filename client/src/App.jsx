import React from 'react';
import './App.css';

function App() {
  const logo = 'https://i.postimg.cc/fWVR4LKt/Dream-Shaper-v7-Create-a-minimalist-and-modern-background-for-a-0.jpg';

  return (
    <div className='container'>
      <img src={logo} alt="banner" />
      <div className='wrapper'>
        <p>Simple File Sharing</p>
        <p>Upload and share the download link</p>


        <button>Upload</button>
      </div>
    </div>
  );
}

export default App;
