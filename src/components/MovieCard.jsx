import React from 'react'
import "../css/MovieCard.css"
import { useMovieContext } from '../contexts/MovieContext'

function MovieCard({ movie }) {
  const { isFavorite, addToFavorite, removeFromFavorites } = useMovieContext()
  const favorite = isFavorite(movie.id)
  const onFavoriteClick = (e) => {
    e.preventDefault()
    if (favorite) removeFromFavorites(movie.id)
    else addToFavorite(movie)
  }
  return (
    <div key={movie.id} className='movie-card'>
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-overlay">
        <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>♥</button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>

    </div>
  )
}

export default MovieCard