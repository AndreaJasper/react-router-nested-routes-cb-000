import React from 'react';
import { Link } from 'react-router-dom';
 
const MoviesList = ({ movies }) => {
  const renderMovies = movies.map(movie => 
    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
  );
 
  return (
    <div>
      {renderMovies}
    </div>
  );
};
 
export default MoviesLis