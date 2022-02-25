export default (state, action) => {
  switch (action.type) {
    case 'ADD_PONY_FOR_COLLECTION':
      return {
        ...state,
        forCollection: [action.payload, ...state.forCollection],
      };
    case 'REMOVE_PONY_FOR_COLLECTION':
      return {
        ...state,
        forCollection: state.forCollection.filter(
          (character) => character.id !== action.payload
        ),
      };
    case 'ADD_PONY_TO_COLLECTED':
      return {
        ...state,
        forCollection: state.forCollection.filter(
          (character) => character.id !== action.payload.id
        ),
        collected: [action.payload, ...state.collected],
      };
    case 'MOVE_TO_FOR_COLLECTION':
      return{
        ...state,
        collected: state.collected.filter(character => character.id !== action.payload.id),
        forCollection: [action.payload, ...state.forCollection]
      }
      case 'REMOVE_FROM_COLLECTED':
        return{
          ...state,
          collected: state.collected.filter(character=> character.id !== action.payload)
        }
    default:
      return state;
  }
};
