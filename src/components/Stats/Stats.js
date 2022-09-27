import React from 'react';

export default function Stats({ slogans, headCount, middleCount, bottomCount }) {
  return (
    <div className="stats">
      <p>You have changed the head {headCount} times.</p>
      <p>You have changed the middle {middleCount} times.</p>
      <p>You have changed the bottom {bottomCount} times.</p>
      <h3>Slogans</h3>
      <ul>
        {slogans.map((slogan) => (
          <li key={slogan}>{slogan}</li>
        ))}
      </ul>
    </div>
  );
}