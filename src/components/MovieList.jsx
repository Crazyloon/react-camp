import React from 'react';
import { MovieCard } from './MovieCard';

export const MovieList = ({movies}) => {
  return (
    <div className="movie-list">
      {movies.map((movie, i) => {
        return <div className="card-holder" style={{'--animation-order': i + 1}} key={i}>
                 <MovieCard movie={movie} />
               </div>
        }
      )}
    </div>
  )
}