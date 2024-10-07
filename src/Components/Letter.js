import React, { useState } from 'react';
import './Letter.css';
import audioFile from './Letter.mp3';

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={toggleEnvelope}>
      <div className="flap"></div>
      <div className="body"></div>
      {isOpen && (
        <div className="letter fullSize">
          <div className="letter-content">
            <p>
              <b>Dear Akka🖤,<br /></b>
              I am filled with gratitude for the love and care you have showered upon me over these past few days. Thank you from the bottom of my heart for making me feel like a cherished member of the family. Your support and encouragement have meant the world to me, and I am deeply appreciative of everything you have done.
            </p>
             <b> @vickyy</b>
          </div>
        </div>
      )}
      {isOpen && <audio src={audioFile} autoPlay />}
    </div>
  );
};

export default Letter;
