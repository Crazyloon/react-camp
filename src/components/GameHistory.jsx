import React from 'react';

export const GameHistory = ({history, jumpTo}) => {
  return (
    <>
      <h3 className="history-heading mb-1">Moves History</h3>
      <ol className="history-list">
        {history.map((step, move) => {
          const desc = move 
            ? `Go to move #${move}`
            : `Restart the game`;
            return (
              <li className="history-item" key={move}>
                <button className="history-button" onClick={() => jumpTo(move)}>{desc}</button>
              </li>
            )
        })}
      </ol>
    </>
  )
}