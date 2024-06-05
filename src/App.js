import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Mainform from './components/Mainform';
import Navbar from './components/Navbar';
import picture1 from './components/picture1.jpg';
import picture2 from './components/picture2.jpg';

function App() {
  const [picture, setPicture] = useState(picture1); // Initial picture
  const [isPicture, setIsPicture] = useState(true); // Track if a picture is being used
  const [showAbout, setShowAbout] = useState(false);

  const handleTogglePicture = () => {
    setPicture(prevPicture => {
      const newPicture = (prevPicture === picture1 ? picture2 : picture1);
      setIsPicture(newPicture === picture1 || newPicture === picture2); // Update state
      return newPicture;
    });
  };

  const handleToggleAbout=()=>{
    setShowAbout(!showAbout)
  }

  return (
    <Router>
      <div className={`app-container ${isPicture ? 'picture-background' : ''}`} style={{
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
        <Navbar
          Title="TextUties"
          home="Home"
          aboutText="About"
          onTogglePicture={handleTogglePicture}
          handleToggleClick = {handleToggleAbout}
        />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Mainform heading="Enter the text to analyze" />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
