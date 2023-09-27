// src/App.js
import React, { useState } from 'react';
import './App.css';
import { extractTextFromImage, initializeTesseract } from './OCRservice';

function App() {
  const [text, setText] = useState('');
  const [imageData, setImageData] = useState('');

  const handleCaptureText = async () => {
    if (imageData) {
      const extractedText = await extractTextFromImage(imageData);
      setText(extractedText);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        setImageData(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      <h1>Text Extraction Extension</h1>
      <input type="file" accept="image/*" onChange={handleFileInputChange} />
      <button onClick={handleCaptureText}>Capture Text</button>
      <div className="result">{text}</div>
    </div>
  );
}

export default App;
