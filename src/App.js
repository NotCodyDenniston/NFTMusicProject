import React from 'react';
import './App.css';


import Card from './components/card';
import musicData from './components/data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>EXPLORE</h2>

        <div className='card-container'>

    {musicData.map(card =>(
      <Card icon={card.icon} artist={card.artist} song={card.song} price={card.price}/>
    ))}
        </div>
          
      </header>
    </div>
  );
}

export default App;
