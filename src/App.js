import React, {useState} from 'react';
import './App.css';

import Card from './components/card';
import musicData from './components/data';
import Menu from './components/menu';

function App() {
  const initialData = {
    musicArray: musicData
  }

const [music, setMusic] = useState(initialData)
  const onClickHandler = (evt) => {
     console.log(evt.target.textContent)
     let filteredData = musicData.filter((song) => song.genre == evt.target.textContent)
     setMusic({
     musicArray: filteredData
      })
     console.log(music.musicArray, 'music', filteredData)
}

  return (
    <div className="App">
      <header className="App-header">
        <h2>EXPLORE</h2>
        <Menu onClickHandler={onClickHandler}/>
    {console.log(music)}
          <div className='card-container'>
            {music.musicArray.map(card =>(
              <Card icon={card.icon} artist={card.artist} song={card.song} price={card.price}/>
            ))}
          </div>
          
      </header>
    </div>
  );
}

export default App;
