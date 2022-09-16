import React from 'react';


export default function Slogan({ slogan, setSlogan }) {

    
  const handleAdd = () => {
    if (!slogan) return;
    setSlogans((prevState) => {
      return [...prevState, slogan];
    });
    setSlogan('');
  };

  return (

    <form onSubmit={handleAdd}>
      <label>
        NEW SLOGAN
        <input type="textarea" value={slogan} onChange={(e) => {
          setSlogan(e.target.value);
        }}></input>
      </label>
      <button>Add Slogan</button>
    </form>
  );
}