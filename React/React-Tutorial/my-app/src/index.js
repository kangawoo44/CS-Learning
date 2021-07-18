import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//   render() {
//     return (
//       /*Notice how with onClick={() => alert('click')}, we’re passing a function as the onClick prop.
//       React will only call this function after a click.
//       Forgetting () => and writing onClick={alert('click')} is a common mistake, 
//       and would fire the alert every time the component re-renders.*/
//       // <button className="square" onClick={() => alert('click')}>
//       <button className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderRow(rowNum) {
    const boardSize = Math.sqrt(this.props.squares.length);
    for (let i = 0; i < boardSize; i++) {
      this.renderSquare(i + rowNum * 3)
    }
  }

  renderBoard() {
    const boardSize = Math.sqrt(this.props.squares.length);
    for (let i = 0; i < boardSize; i++) {
      this.renderRow(i)
    }
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  /*In JavaScript classes, you need to always call super when defining the constructor of a subclass. 
  All React component classes that have a constructor should start with a super(props) call.*/
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        lastMoveColRow: ""
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        lastMoveColRow: getSquareColRow(i),
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const currentStepNumber = this.state.stepNumber;
    const current = history[currentStepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + " : " + history[move].lastMoveColRow :
        'Go to game start';
      
      const moveText = move === currentStepNumber ? <b>{desc}</b> : desc
      const moveButton = <button onClick={() => this.jumpTo(move)}>{moveText}</button>
      return (
        //It’s strongly recommended that you assign proper keys whenever you build dynamic lists.
        /*In the tic-tac-toe game’s history, each past move has a unique ID associated with it: it’s the sequential number of the move.
        The moves are never re-ordered, deleted, or inserted in the middle, so it’s safe to use the move index as a key.*/
        <li key={move}>
          {moveButton}
        </li>
      );
    })

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ul>{moves}</ul>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const getSquareColRow = (squareIndex) => {
  const colRow = [
    "(1,1)", "(2,1)", "(3,1)",
    "(1,2)", "(2,2)", "(3,2)",
    "(1,3)", "(2,3)", "(3,3)"
  ];
  return colRow[squareIndex];
}