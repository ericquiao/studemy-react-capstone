import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function PonyControls({ character, type }) {
  console.log(character.id);
  const { removePonyForCollection, addPonyToCollected,moveForCollection,
    removeFromCollected } =
    useContext(GlobalContext);
  return (
    <div className='inner-card-controls'>
      {type === 'forCollection' && (
        <>
          <button
            className='ctrl-btn'
            onClick={() => addPonyToCollected(character)}
          >
            <i className='fa-fw far fa-eye'></i>
          </button>

          <button
            className='ctrl-btn'
            onClick={() => removePonyForCollection(character.id)}
          >
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}

      {type === 'collected' && (
        <>
          <button className='ctrl-btn' onClick={()=>moveForCollection(character)}>
            <i className='fa-fw far fa-eye-slash'></i>
          </button>

          <button className='ctrl-btn' onClick={()=>removeFromCollected(character.id)}>
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}
    </div>
  );
}
