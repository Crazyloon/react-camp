import React from "react";
import { MovieBackdrop } from "./MovieBackdrop";
import { MovieRaiting } from "./MovieRaiting";

const baseImagePath = "http://image.tmdb.org/t/p/w342/";
export const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <header className="movie-header">
        <span className="movie-title">{movie.title}</span>{" "}
        <MovieRaiting raiting={movie.vote_average} />
      </header>
      <MovieBackdrop
        backdrop={baseImagePath + movie.backdrop_path}
        overview={movie.overview}
        title={movie.title}
      />
      <footer className="movie-footer">
        <small>Released: {movie.release_date}</small>
      </footer>
    </div>
  );
};
