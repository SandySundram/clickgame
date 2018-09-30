import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Components/GameGame';
import Body from './Components/GameBody';
import Header from './Components/GameHeader';
import Footer from './Components/GameFooter';
import image1 from './images/Bebe.jfif';
import image2 from './images/Butters.jfif';
import image3 from './images/Clyde.jfif';
import image4 from './images/Eric.jfif';
import image5 from './images/Kenny.jfif';
import image6 from './images/Kyle.jfif';
import image7 from './images/Red.jfif';
import image8 from './images/Sharon.jfif';
import image9 from './images/Stan.jfif';
import image10 from './images/Token.jfif';
import image11 from './images/Tweek.jfif';
import image12 from './images/Wendy.jfif';

class App extends Component {
  
  state={
    images : [{image:image1,id:1},
              {image:image2,id:2},
              {image:image3,id:3},
              {image:image4,id:4},
              {image:image5,id:5},
              {image:image6,id:6},
              {image:image7,id:7},
              {image:image8,id:8},
              {image:image9,id:9},
              {image:image10,id:10},
              {image:image11,id:11},
              {image:image12,id:12}
            ],
    clicked: [],
    score : 0,
    highScore: 0
  };

  whenClicked = (id) => {
    let clickedImages = this.state.clicked;
    let {score} = this.state;

    if(clickedImages.includes(id)){
      // highScore = score;
      this.setState({highScore: score,
                      score:0,
                      clicked:[]});
    }else{
      score++;
      clickedImages.push(id);
      this.setState({score:this.state.score+1,
                      clicked:clickedImages});
    }

    //shuffle images
    let array = this.state.images;
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    this.setState({images: array});

  }

  render() {
    return (
      <div className="App">
        <Header score={this.state.score} highScore={this.state.highScore}/>
        <Body />
        <div className="gameGame">
            <div className="CharacContainer">   
                {this.state.images.map(data => {
                  return <Game src={data.image} 
                            clicked={this.whenClicked.bind(this,data.id)}
                          />
                })}
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
