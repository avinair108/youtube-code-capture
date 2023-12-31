// src/App.tsx
import React from 'react';
import ImageTranscription from './ImageTranscription';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ImageTranscription />
      </header>
    </div>
  );
};

export default App;
