import React from 'react';

export default function Character({ head, middle, bottom }) {
  return (
    <div>
      <div className="character">
        <div
          className="head-display"
          style={{ backgroundImage: `url(./${head}.png)` }}
        ></div>
        <div
          className="middle-display"
          style={{ backgroundImage: `url(./${middle}.png)` }}
        ></div>
        <div
          className="bottom-display"
          style={{ backgroundImage: `url(./${bottom}.png)` }}
        ></div>
      </div>
    </div>
  );
}