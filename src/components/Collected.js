import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { PonyCard } from './PonyCard'


export const Collected = () => {
  const {collected}=useContext(GlobalContext)
  return (
    <div className='movie-page'>
    <div className='container'>
      <div className='header'>
        <h1 className='heading'>Collected</h1>
      </div> 

      {collected.length > 0 ? (<div className='movie-grid'>
        {collected.map((character) => (
          <PonyCard character={character} type='collected' />
        ))}
      </div>
            ):(
              <h2 className='no-movies'>No Ponies collected.</h2>
            )}
      
    </div>
  </div>
  )
}
