import React, { Component } from 'react';
import Hole from '../Hole/Hole';
import './Game.css'

class Game extends Component {
  state = {
    boardState: []
  };

  constructor () {
    super()
    const boardState = [];
    for (let i = 0; i < 24; i += 1) {
      boardState.push({
        holeState: '',
        validMoves: this.fetchValidMoves(i + 1),
      });
    }
    this.state = {boardState};
  }

  /**
   * Fetches possible valid moves from a position.
   */
  fetchValidMoves = position => {
    if (position % 8 === 0) {
      return [position - 7, position - 1];
    } else if (position % 8 === 1) {
      const validMoves = [position + 1, position + 7];
      if (position - 8 > 0) {
        validMoves.push(position - 8);
      }
      if (position + 8 < 24) {
        validMoves.push(position + 8);
      }
      return validMoves;
    } else if (position % 2) {
      const validMoves = [position - 1, position + 1];
      if (position - 8 > 0) {
        validMoves.push(position - 8);
      }  
      if (position + 8 < 24) {
        validMoves.push(position + 8);
      }
      return validMoves;
    } else {
      return [position - 1, position + 1];
    }
  };

  handleholeClicked = (id) => {
    console.log(id);
  };

  render() {
    console.log(this.state.boardState);
    return (
      <div className="board">
        <h1>Navkankari</h1>
        {this.state.boardState.map((hole, index) => {
          return (
            <Hole
              id={index + 1}
              key={index + 1}
              holeState={hole.holeState}
              onClicked={this.handleholeClicked}
            />
          );
        })}
      </div>
    );
  }
}

export default Game;
