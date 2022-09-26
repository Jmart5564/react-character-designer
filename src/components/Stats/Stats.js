import React from 'react';

export default function Stats({ slogans }) {
  return (
    <ul>
      {slogans.map((slogan) => (
        <li key={slogan}>{slogan}</li>
      ))}
    </ul>
  );
}