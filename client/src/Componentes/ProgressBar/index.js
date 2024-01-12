import React, { useState, useEffect } from 'react';

function ProgressBar({ completed }) {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    // Simulate a loading for demo purposes
    const interval = setInterval(() => {
      setFill(oldFill => {
        if (oldFill < completed) {
          return oldFill + 1;
        } else {
          clearInterval(interval);
          return oldFill;
        }
      });
    }, 10);
    return () => clearInterval(interval);
  }, [completed]);

  return (
    <div style={{ 
      width: '100%', 
      backgroundColor: 'None',
      borderRadius: '20px',
      border: '0.5px solid gray', 
      marginTop: '20px'
    }}>
      <div style={{
        height: '30px',
        width: `${fill}%`,
        backgroundColor: fill === 100 ? 'green' : '#414BB2',
        transition: 'width 1s ease-in-out',
        borderRadius: '20px'
      }}>
        {/* Remove the fill percentage text */}
      </div>
    </div>
  );
}

export { ProgressBar };
