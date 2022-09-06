import React, { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterByName from './Components/FilterByName/FilterByName';
import MovieList from './Components/MovieList/MovieList';
import { moviesData } from './Constante/data';

function App() {
  const [movies,setMovies] = useState(moviesData)
  const [inputsearch, setInputsearch] = useState("")
  
  
  const add = (newMovie) => {
setMovies([...movies,newMovie])
}

  
  return (
    <div className="App">
      <h1>WS MOVIE APP</h1>
      <FilterByName inputsearch={inputsearch} setInputsearch={setInputsearch} />
      <MovieList movies={movies} inputsearch={inputsearch}/>
      <AddMovie add={add}/>
      
    </div>
  );
}

export default App;
