import React from 'react'
import PonyControls from './PonyControls'

export const PonyCard = ({character,type}) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      {character.image[0] ? (         
          <img src={`${character.image}`} 
               alt={`${character.alias}`} 
          />
        ) : (
          <div className="filler-poster"></div>
        )}

        <PonyControls type={type} character={character}/>
    </div>
  )
}
 