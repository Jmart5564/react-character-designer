import React, { useState } from 'react';
import './Main.css';
import background from '../../background.jpg';
import Character from '../Character/Character';
import Slogan from '../Slogan/Slogan';
import Stats from '../Stats/Stats';

export default function Main() {
  const [head] = useState('cat');
  const [middle] = useState('armour');
  const [bottom] = useState('skeleton');
  const [slogans, setSlogans] = useState([]);
  
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <main>
        <h1>Character Designer</h1>
        <section className="character-designer">
          <div className="display">
            <Character {...{ head, middle, bottom }} />
          </div>
          <div>
            <Stats slogans={slogans} />
          </div>
          <div>
            <Slogan setSlogans={setSlogans} />
          </div>
        </section>
      </main>
    </div>
  );
}