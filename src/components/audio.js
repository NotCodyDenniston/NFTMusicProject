import React from "react";
import song1 from '../assets/song1.mp3'
import song2 from '../assets/song2.mp3'

export default function audio(props) {
  const audio = props.song == 'Hallowed be thy name' ? new Audio( song2 ) : new Audio( song1 );
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
    <div className="cardInfo-column">
     {playButton}
     {stopButton}

    </div>
  );
}