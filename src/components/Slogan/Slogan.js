import React, { useState } from 'react';


export default function Slogan({ setSlogans }) {
  const [currentSlogan, setCurrentSlogan] = useState('');
    
  const handleAdd = (e) => {
    e.preventDefault();
    if (!currentSlogan) return;
    setSlogans((prevState) => {
      return [...prevState, currentSlogan];
    });
    setCurrentSlogan('');
  };

  return (

    <form onSubmit={handleAdd}>
      <label>
        NEW SLOGAN
        <input type="textarea" value={currentSlogan} onChange={(e) => {
          setCurrentSlogan(e.target.value);
        }}></input>
      </label>
      <button>Add Slogan</button>
    </form>
  );
}