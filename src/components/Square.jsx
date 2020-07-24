import React from 'react';

export const Square = ({position, value, onClick, player}) => {
  return (
    <button onClick={onClick} className={`square square-${position} square-${value} turn-${player}`}>
      {value}
    </button>
  )
}