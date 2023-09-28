import { useState } from 'react';
import './App.css';

function App() {
  const [selectedText, setSelectedText] = useState('placeholder');

  return (
    <div className="App">
      <div>
        <h1>Screenshot Transcriber</h1>
        <button
          onClick={() => {
            console.log('click');
          }}
        >
          Capture Screenshot
        </button>

        <textarea
          placeholder="Trimmed Text"
          value={selectedText}
          onChange={(e) => setSelectedText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
