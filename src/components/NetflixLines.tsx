import React, { useEffect, useState } from 'react';
import '../styles/NetflixLines.css';

const NetflixLines = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newLine = {
        id: Date.now(),
        left: Math.random() * 100 + 'vw',
        width: 1 + Math.random() * 5 + 'px',
        background: 'hsl(' + Math.floor(Math.random() * 60) + 'deg, 100%, 50%)'
      };

      setLines(prevLines => [...prevLines, newLine]);

      setTimeout(() => {
        setLines(prevLines => prevLines.filter(line => line.id !== newLine.id));
      }, 2000);
    }, 20);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='main_container netflix__container'>
      {lines.map(line => (
        <div
          key={line.id}
          className='lines'
          style={{
            left: line.left,
            width: line.width,
            background: line.background
          }}
        />
      ))}
    </div>
  );
};

export default NetflixLines;



  