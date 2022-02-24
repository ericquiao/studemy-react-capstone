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
  

  return (
    <GlobalContext.Provider
      value={{
        forCollection: state.forCollection,
        collected: state.collected,
        addPonyForCollection,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
