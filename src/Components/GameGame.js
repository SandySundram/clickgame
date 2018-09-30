import React, {Component} from 'react';
import './GameGame.css';
// import Stan from './images/Stan.jfif'

const Game = props => {
    // console.log(props.clicked);
    return (
        <div className="imageDiv" onClick={props.clicked}><img src={props.src} ></img></div>
    )
}
export default Game;