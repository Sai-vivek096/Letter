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
It feels like a part of me left when you went to Germany. The days longer, and I find myself missing your laugh, your advice, and even those silly moments we shared. I didn’t realize how much comfort your presence brought until now. There’s a space here that only you can fill, and though I’m proud of you for chasing your dreams, I can’t help but feel the weight of your absence.
<br/>
Come back soon, even if just for a little while, because I miss you more than words can say."


        </p>
             <b> @thammu</b>
          </div>
        </div>
      )}
      {isOpen && <audio src={audioFile} autoPlay />}
    </div>
  );
};

export default Letter;
