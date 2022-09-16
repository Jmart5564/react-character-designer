import React from 'react';
import './Character.css';

export default function Character({ head, middle, bottom }) {
  return (
    <div>
      <div className="character">
        <div className="head-display">
          <img src={`${process.env.PUBLIC_URL}/images/${head}-head.png`}/>
        </div>
        <div className="middle-display">
          <img src={`${process.env.PUBLIC_URL}/images/${middle}-middle.png`}/>
        </div>
        <div className="bottom-display">
          <img src={`${process.env.PUBLIC_URL}/images/${bottom}-bottom.png`}/>
        </div>
      </div>
    </div>
  );
}