import React from "react";
import { actors } from "../data";

function Actors() {

  let actorsList = actors.map(actor => {
    return (
      <div key={actor.name}>
        <h3>{actor.name}</h3>
        <ul>Movies: {actor.movies.map(movie => {
          return <li key={movie}>{movie}</li>
        })}</ul>


      </div>
    )
  })
  return (
  <>
    <h1>Actors Page</h1>
    <div>{actorsList}</div>;
  </>
  
  )
}

export default Actors;
