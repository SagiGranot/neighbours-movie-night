import React from 'react';
import MoviesTable from './components/MoviesTable';
import SearchMovies from './components/SearchMovies';

const App = () => {
  return (
    <div>
      <h1>Movies search</h1>
      <SearchMovies />
      <MoviesTable />
    </div>
  );
}
    
export default App;