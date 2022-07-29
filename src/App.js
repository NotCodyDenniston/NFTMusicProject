import React, {useState} from 'react';
import './App.css';

import Card from './components/card';
import musicData from './components/data';
import Menu from './components/menu';
import Nav from './components/nav';
import Footer from './components/footer';

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
}

  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <h2>EXPLORE</h2>
        <Menu onClickHandler={onClickHandler}/>

          <div className='card-container'>
            {music.musicArray.map(card =>(
              <Card
               icon={card.icon}
               artist={card.artist} 
               song={card.song} 
               price={card.price}/>
            ))}
          </div>
          <Footer/>
      </header>
    </div>
  );
}

export default App;
