import React, { useEffect, useState } from 'react'
import "../css/Home.css"
import MovieCard from '../components/MovieCard'
import { searchMovies, getPopularMovies } from "../services/api"


function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      }
      catch (err) {
        console.log(err)
        setError("failed to load movies")
      } finally {
        setLoading(false)
      }
    }
    loadPopularMovies()
  }, [])
  async function handleSearch(e) {
    e.preventDefault()
    if (!searchQuery.trim()) return
    if (loading) return
    setLoading(true)
    try {

      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    } catch (error) {
      console.log(error)
      setError("failed to search movies..")

    } finally {
      setLoading(false)
    }

  }

  return (
    <div className="home">
      <form className='search-form' onSubmit={handleSearch}>
        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" className='search-input' placeholder='search for movies...' />
        <button type='submit' className='search-button'>Search</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : <div className='movies-grid'>
        {movies.map((movie) => (
          movie.title.toLowerCase().includes(searchQuery) && <MovieCard movie={movie} />
        ))}
      </div>
      }

    </div>
  )

}

export default Home