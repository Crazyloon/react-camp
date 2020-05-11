import React from 'react';
import './App.css';
import movieData from './movie.json';

function MovieDisplay(props) {
  const item = props.item;
  return (
    <div className="movie-display">
      { <Poster item={item} /> }
      { details(item) }
    </div>
  )
}
function Poster(props) {
  const item = props.item;
  return (
      <div className="poster-card">
        <img alt={ item.original_title + ' Image'} src={'http://image.tmdb.org/t/p/w342/' +  item.poster_path } />
      </div>
    )
}

function details(item) {
  return (
    <div className="detail-card">
      <h1> { item.original_title }</h1>
      <h2>Overview: </h2> { item.overview } 
      <h2>Release Date: </h2> { item.release_date }
    </div>
  )
}

function App() {
  return (
    <div className="main">
      <div className="title">{ movieData.name }</div>
      { movieData.items.map((item) => { return <MovieDisplay item={item} /> }) }
    </div>
  );
}

export default App;
