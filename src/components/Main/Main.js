import React, { useState } from 'react';
import './Main.css';
import background from '../../background.jpg';
import Character from '../Character/Character';

export default function Main() {
  const [head] = useState('cat');
  const [middle] = useState('armour');
  const [bottom] = useState('skeleton');
  
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <main>
        <h1>Character Designer</h1>
        <section className="character-designer">
          <div className="display">
            <Character {...{ head, middle, bottom }} />
          </div>
        </section>
      </main>
    </div>
  );
}