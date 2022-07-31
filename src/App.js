import React, {useState, useEffect} from 'react';
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
  const [sortingMethod, setSortingMethod] = useState('')
  
  //Sorts the prices or dates when an option from the form is selected
  useEffect(() => {
    console.log('USEEFFECT')
  sortCases();
  }, [sortingMethod])

  const sortCases = () => {
    console.log('SORTCASES','SORTING METHOd', sortingMethod)
    switch(sortingMethod) {
        case 'priceLowToHigh':
          music.musicArray.sort(function(a, b){return a.price-b.price});
            break;
        case 'priceHighToLow':
            music.musicArray.sort(function(a, b){return b.price-a.price});
            break;
        case 'dateLowToHigh':
          music.musicArray.sort(function(a, b){return a.datePublished-b.datePublished});
            break;
        case 'dateHighToLow':
          music.musicArray.sort(function(a, b){return b.datePublished-a.datePublished});
            break;
    }
    //Setting State just to rerender component
    setMusic({...music})
  }

  //OnClick for genre menu
  const onClickHandler = (evt) => {
     setMusic({
     musicArray: musicData.filter((song) => song.genre == evt.target.textContent)
      })
}

 


  return (
    
    <div className="App">
      {console.log('rendering')}
      <header className="App-header">
        <Nav/>
        <h2>EXPLORE</h2>
        <Menu 
        onClickHandler={onClickHandler} 
        sortingMethod={sortingMethod} 
        setSortingMethod={setSortingMethod}/>

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
