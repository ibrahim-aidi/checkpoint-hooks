import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies,inputsearch}) => {
  return (
    <div className='movie-list'>
       {movies
       
       .filter(movie => movie.title.includes(inputsearch))
       .map( movie => <MovieCard movie={movie} key={movie.id}/>)}
    </div>
  )
}

export default MovieList