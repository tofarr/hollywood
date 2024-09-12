import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('Bypassing Encryption');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setIsComplete(true);
          return 100;
        }
        const newProgress = oldProgress + 1;
        if (newProgress === 50) {
          setMessage('Hacking Database');
        }
        return newProgress;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <div className="hack-container">
        <h1 className={`hack-message ${isComplete ? 'complete' : 'flashing'}`}>
          {isComplete ? "You're In!" : message}
        </h1>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
