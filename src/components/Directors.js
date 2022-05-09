import React from "react";
import { directors } from "../data";

function Directors() {

  let directorsList = directors.map(director =>  {
    return (
      <div key = {director.name}>
        <h3>Name: {director.name}</h3>
        <p>Movies: 
          {director.movies.map(movie => {
            return <li key={movie}>{movie}</li>
          })}

        </p>
      </div>
    )
  })
  return (
  <>
    <h1>Directors Page</h1>
    <div>{directorsList}</div>;
  </>
  
  )
}

export default Directors;
