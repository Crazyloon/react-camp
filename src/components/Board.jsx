import React from "react";
import { Square } from "./Square";


export const Board = ({status, gameBoard, placeMarker, player}) => {  
  
  const renderSquare = (i) => {
    return <Square position={i} value={gameBoard[i]} onClick={() => placeMarker(i)} player={player} />
  }

  return (
    <>
      <h2 className="status">{status}</h2>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
};


// GAME BOARD:

// Rendered Squares
// [0] [1] [2]
// [3] [4] [5]
// [6] [7] [8]

// Initial State
// [ ] [ ] [ ]
// [ ] [ ] [ ]
// [ ] [ ] [ ]

// Winning State Diagonal
// [X] [ ] [ ]
// [O] [X] [ ]
// [O] [ ] [X]

// Winning State Vertical
// [ ] [ ] [X]
// [ ] [O] [X]
// [O] [ ] [X]

// Winning State Horizontal
// [X] [X] [X]
// [ ] [O] [ ]
// [O] [ ] [ ]