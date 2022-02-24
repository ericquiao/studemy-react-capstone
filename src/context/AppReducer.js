export default (state, action) => {
  switch (action.type) {
    case 'ADD_PONY_FOR_COLLECTION':
      return {
        ...state,
        forCollection: [action.payload, ...state.forCollection],
      };
    case 'REMOVE_PONY_FROM_FOR_COLLECTION':
      return {
        ...state,
        forCollection: state.forCollection.filter(
          (character) => character.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
