import React, { useState } from "react";
import { Board } from "./Board";
import { GameHistory } from "./GameHistory";
import { GameStatus } from "./GameStatus";

export const Game = () => {
  // const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([{
      squares: Array(9).fill(null)
    }]
  );
  const [player, setPlayer] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];
  const marker = player === true ? "X" : "O";

  function jumpTo(step) {
    setStepNumber(step);
    setPlayer(step % 2 === 0);
  }

  function resetGameBoard() {
    setHistory([{squares: Array(9).fill(null)}]);
    setStepNumber(0);
    // setGameBoard(Array(9).fill(null));
    setPlayer(true);
  }

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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    if (history[history.length - 1].squares.filter((marker) => marker === null).length === 0){
      return false;
    }
    return null;
  }

  const placeMarker = (i) => {
    const gameHistory = history.slice(0, stepNumber + 1);
    const currentGameBoard = gameHistory[gameHistory.length - 1];
    const _squares = currentGameBoard.squares.slice();
    if (calculateWinner(_squares) || _squares[i]) {
      return;
    }
    _squares[i] = marker;
    setHistory(gameHistory.concat([{
      squares: _squares
    }]));
    setStepNumber(gameHistory.length);
    // setGameBoard(_squares);
    setPlayer(!player);
  };
  // const placeMarker = (i) => {
  //   const _squares = gameBoard.slice();
  //   if (calculateWinner(_squares) || _squares[i]) {
  //     return;
  //   }
  //   _squares[i] = marker;
  //   setGameBoard(_squares);
  //   setPlayer(!player);
  // };

  const winner = calculateWinner(current.squares);

  return (
    <div className="game">
      <h2 className="status"><GameStatus winner={winner} marker={marker} /></h2>
      <div className="game-board">
        <Board
          placeMarker={placeMarker}
          gameBoard={current.squares}
          player={marker}
        />
      </div>
      {winner !== null 
        ? <button onClick={() => {resetGameBoard()}} className="btn btn-accent-outline reset-button mt-2">Play Again</button> 
        : null}
      <div className="game-history mt-2">
        { history.length > 1 ? <GameHistory history={history} jumpTo={jumpTo}/> : null}
      </div>
    </div>
  );
};
