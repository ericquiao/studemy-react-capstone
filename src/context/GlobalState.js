import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
  forCollection: localStorage.getItem('forCollection')
    ? JSON.parse(localStorage.getItem('forCollection'))
    : [],
  collected: localStorage.getItem('collected')
    ? JSON.parse(localStorage.getItem('collected'))
    : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('forCollection', JSON.stringify(state.forCollection));
    localStorage.setItem('collected', JSON.stringify(state.collected));
  }, [state]);

  //actions
  const addPonyForCollection = (character) => {
    dispatch({ type: 'ADD_PONY_FOR_COLLECTION', payload: character });
  };

  const removePonyForCollection = (id) => {
    dispatch({type: 'REMOVE_PONY_FOR_COLLECTION', payload:id})
  }

  const addPonyToCollected = character => {
    dispatch({type: 'ADD_PONY_TO_COLLECTED', payload: character})
  }
  
  //move to for Collection
  const moveForCollection = (character) => {
    dispatch({type: 'MOVE_TO_FOR_COLLECTION', payload: character})
  }

  //remove from collected
  const removeFromCollected = id => {
    dispatch({type: 'REMOVE_FROM_COLLECTED', payload:id})
  }


  return (
    <GlobalContext.Provider
      value={{
        forCollection: state.forCollection,
        collected: state.collected,
        addPonyForCollection,
        removePonyForCollection,
        addPonyToCollected,
        addPonyToCollected,
        moveForCollection,
        removeFromCollected
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
