import React, { useState } from 'react';
import { FilterControls } from './FilterControls';
import { MovieList } from './MovieList';
import movieData from "../movie.json";
import { sortingFunction } from '../sortingFunction';

export const Gallery = () => {
  const [filter, setFilter] = useState("alphabetical");
  const [ascending, setAscending] = useState(true);

  const allMovies = movieData.items.filter(
    (item) => item.backdrop_path && item.media_type === "movie"
  );
  const filteredMovies = allMovies.sort((a, b) => {
    switch (filter) {
      case "alphabetical":
        return sortingFunction(a.title, b.title, ascending);

      case "raiting":
        return sortingFunction(a.vote_average, b.vote_average, ascending);

      case "release":
        return sortingFunction(
          new Date(a.release_date).getTime(),
          new Date(b.release_date).getTime(),
          ascending
        );

      default:
        return null;
    }
  });

  return (
    <div className="gallery">
      <FilterControls
        onSetFilter={setFilter}
        onSetAscending={setAscending}
        ascending={ascending}
      />
      <MovieList movies={filteredMovies} />
    </div>
  )
}