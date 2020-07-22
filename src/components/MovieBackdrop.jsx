import React from 'react';

export const MovieBackdrop = ({backdrop, overview, title}) => {
  return (
    <section className="backdrop">
      <img className="backdrop-image" src={backdrop} alt={`Movie backdrop for ${title}`} />
      <div className="overview">
        <p className="text">{overview.substr(0, 300)}{overview.length > 300 ? '...' : ''}</p>
      </div>
    </section>
  )
}