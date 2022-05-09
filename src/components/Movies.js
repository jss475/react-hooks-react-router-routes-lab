import React from "react";
import { movies } from "../data";

function Movies() {

  let moviesList = movies.map(movie => {
    return (
      <div key={movie.title}>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Genres:
          {movie.genres.map(genre => {
            return <li key={genre}>{genre}</li>
          })}
        </p>
      </div>
    )
  })

  return (
  <>
    <h1>Movies Page</h1>
    <div>{moviesList}</div>;
  </>
  
  )
}

export default Movies;
