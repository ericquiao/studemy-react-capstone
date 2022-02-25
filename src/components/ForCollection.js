import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { PonyCard } from './PonyCard';

export const ForCollection = () => {
  const { forCollection } = useContext(GlobalContext);

  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>Collection Wishlist</h1>
        </div> 

        {forCollection.length > 0 ? (<div className='movie-grid'>
          {forCollection.map((character) => (
            <PonyCard character={character} type='forCollection' />
          ))}
        </div>
              ):(
                <h2 className='no-movies'>No Ponies wished for, add some.</h2>
              )}
        
      </div>
    </div>
  );
};
