import React from 'react'

export const ResultCard = ({character}) => {
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {character.name?(
          <img src={`${character.image}`} alt="no photo available" />
        ):(<div className='filler-poster'></div>)}
      </div>
    </div>
  )
}
