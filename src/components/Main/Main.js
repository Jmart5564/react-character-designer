import React, { useState } from 'react';
import './Main.css';
import background from '../../background.jpg';
import Character from '../Character/Character';
import Slogan from '../Slogan/Slogan';
import Stats from '../Stats/Stats';
import Creator from '../Creator/Creator';

export default function Main() {
  const [head, setHead] = useState('cat');
  const [middle, setMiddle] = useState('armour');
  const [bottom, setBottom] = useState('skeleton');
  const [slogans, setSlogans] = useState([]);
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);


  function handleChange(type, value) {
    if (type === 'head'){
      setHead(value);
      setHeadCount((prevState) => prevState + 1);
    }
    if (type === 'middle'){
      setMiddle(value);
      setMiddleCount((prevState) => prevState + 1);
    }
    if (type === 'bottom'){
      setBottom(value);
      setBottomCount((prevState) => prevState + 1);
    }
  }
  
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <main>
        <section className="character-designer">
          <h1>Character Designer</h1>
          <div className="creator">
            <Creator head={head} middle={middle} bottom={bottom} handleChange={handleChange} />
          </div>
          <div className="display">
            <Character {...{ head, middle, bottom }} />
          </div>
          <div>
            <Stats
              headCount={headCount}
              middleCount={middleCount}
              bottomCount={bottomCount} 
              slogans={slogans} />
          </div>
          <div>
            <Slogan setSlogans={setSlogans} />
          </div>
        </section>
      </main>
    </div>
  );
}