// src/ImageTranscription.tsx
import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import './ImageTranscription.css'; // Import the CSS file

const ImageTranscription: React.FC = () => {
  const [transcription, setTranscription] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);

      const { data } = await Tesseract.recognize(file, 'eng');
      setTranscription(data.text);
    }
  };

  return (
    <div className="image-transcription-container">
      <h2>Image Transcription</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && (
        <img src={selectedImage} alt="Selected" className="selected-image" />
      )}
      {transcription && (
        <div className="transcription-result">
          <h3>Transcription:</h3>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
};

export default ImageTranscription;
