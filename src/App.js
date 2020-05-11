import React from 'react';
import './App.css';
import movieData from './movie.json';

function App() {
  return (
    <div>
      { movieData.name }
    </div>
  );
}

export default App;
