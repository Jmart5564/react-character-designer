import React from 'react';

export default function Character({ head, middle, bottom }) {
  return (
    <div>
      <div className="character">
        <div
          className="head-display"
          style={{ backgroundImage: `url(../images/${head}.png)` }}
        ></div>
        <div
          className="middle-display"
          style={{ backgroundImage: `url(../images/${middle}.png)` }}
        ></div>
        <div
          className="bottom-display"
          style={{ backgroundImage: `url(../images/${bottom}.png)` }}
        ></div>
      </div>
    </div>
  );
}