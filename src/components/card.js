import React from "react";

import Audio from './audio'
import EthIcon from '../assets/eth.jpg'



function Card (props) {
    
    return (
        <div className="card">
        <img src={props.icon}/>
        <div className="cardInfo">
            <section >
            <Audio song={props.song}/>
            </section>
            <section className="cardInfo-column">
            <div className="songs">{props.song}</div>
            <div>{props.artist}</div>
            </section>
            <section className="cardInfo-column">
            <div>price</div>
            <div className="price"><img src={EthIcon}/> {props.price}</div>
            </section>
        </div>

        </div>
    )
}

export default Card