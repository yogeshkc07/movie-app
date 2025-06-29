import React from 'react'
import "../css/MovieCard.css"

function MovieCard({movie}) {
       const onFavoriteClick=()=>{
alert("You clicked me")}
  return (
    <div key={movie.id} className='movie-card'>
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-overlay">
            <button className='favorite-btn' onClick={onFavoriteClick}>♥</button>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>

    </div>
  )
}

export default MovieCard