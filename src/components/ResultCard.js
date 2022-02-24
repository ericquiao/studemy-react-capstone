import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ResultCard = ({ character }) => {
  const{addPonyForCollection, forCollection} = useContext(GlobalContext);

  let storedPony = forCollection.find(o => o.id === character.id)


  const forCollectionDisabled = storedPony ? true : false;
  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {character.name ? (
          <img src={`${character.image}`} alt='no photo available' />
        ) : (
          <div className='filler-poster'></div>
        )}
      </div>

      <div className='info'>
        <div className='header'>
          <h3 className='title'>{character.name}</h3>
          <h4 className='release-date'>
            {character.sex ? character.sex : '-'}
          </h4>
        </div>

        <div className='controls'>
          <button
            className='btn'
            disabled={forCollectionDisabled}
            onClick={() => addPonyForCollection(character)}
          >
            Add for collection
          </button>
        </div>
      </div>
    </div>
  );
};
