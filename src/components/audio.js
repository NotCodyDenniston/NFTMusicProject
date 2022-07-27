import React from "react";
import song1 from '../assets/song1.mp3'
import song2 from '../assets/song2.mp3'

export default function App() {
  const audio = new Audio( song2 );
  const start = () => {
    audio.play();
  };
  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const playButton =  <button onClick={start}>Play</button>
  const stopButton =  <button onClick={stop}>Stop</button>

  

  return (
    <div>
     {playButton}
     {stopButton}

    </div>
  );
}