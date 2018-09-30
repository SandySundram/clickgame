import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(<div className="gameHeader">CLICKY Game <br/> Score:{this.props.score} | Highscore:{this.props.highScore}</div>);
    }
}

export default Header;