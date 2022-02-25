import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ResultCard = ({ character }) => {
  const { addPonyForCollection, addPonyToCollected, forCollection, collected } =
    useContext(GlobalContext);

  let storedPony = forCollection.find((o) => o.id === character.id);
  let storedPonyCollected = collected.find((o) => o.id === character.id);

  const forCollectionDisabled = storedPony
    ? true
    : storedPonyCollected
    ? true
    : false;

  const addPonyToCollectedDisabled = storedPonyCollected ? true : false;

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
            Gender: {character.sex ? character.sex : '-'}
          </h4>
          <h4 className='release-date'>
            Kind: {character.kind ? character.kind : '-'}
          </h4>
          <h5 className='release-date'>
            Residence: {character.residence ? character.residence : '-'}
          </h5>
          <h5 className='release-date pointer-link'>
            url: <u>{character.url ? character.url : '-'}</u>
          </h5>
        </div>

        <div className='controls'>
          <button
            className='btn'
            disabled={forCollectionDisabled}
            onClick={() => addPonyForCollection(character)}
          >
            Add for collection
          </button>
          <button
            className='btn'
            disabled={addPonyToCollectedDisabled}
            onClick={() => addPonyToCollected(character)}
          >
            Already collected
          </button>
        </div>
      </div>
    </div>
  );
};
