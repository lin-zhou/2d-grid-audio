import React, { Component } from 'react';
import './style/App.css';
import Grid from "./framework/Grid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        maxX: 10,
        maxY: 10,
        spriteVals: [
            
        ],
    }
  }

  getRandomPos = (x, y) => {
    return {
          x: Math.floor(Math.random() * x),
          y: Math.floor(Math.random() * y),
      };
  };

  render() {
    return (
      <div className="body">
          {/*<MazeComponent maxX={this.state.maxX} maxY={this.state.maxY}/>*/}
          <Grid maxX={this.state.maxX} maxY={this.state.maxY} spriteVals={this.state.spriteVals}/>
      </div>
    );
  }
}

export default App;
