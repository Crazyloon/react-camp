import React from 'react';

export const GameStatus = ({winner, marker}) => {
  let status;
  if (winner) {
    status = <><span className={`player-${winner}`}>{`${winner}`}</span> is the winner! 🥳</>;
  } else if (winner === null) {
    status = <>Player <span className={`player-${marker}`}>{`${marker}`}</span>, make your move.</>;
  } else {
    status = <>Cat's Game! No winner this time!</>
  }

  return (
    <h2 className="status">{status}</h2>
  )
}