// src/ImageTranscription.tsx
import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const ImageTranscription: React.FC = () => {
  const [transcription, setTranscription] = useState<string>('');

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const { data } = await Tesseract.recognize(file, 'eng');
      setTranscription(data.text);
    }
  };

  return (
    <div>
      <h2>Image Transcription</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {transcription && (
        <div>
          <h3>Transcription:</h3>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
};

export default ImageTranscription;
