import { ADD_DRINK, REMOVE_DRINK } from '../actions/lunchActions';

const initialState = {
  drinks: [],
  chips: [],
  sandwiches: [],
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drinks: [...state.drinks, action.payload] };
    case REMOVE_DRINK:
      return { ...state, drinks: state.drinks.filter(d => d !== action.payload) };
    case 'ADD_CHIPS':
      return { ...state, chips: [...state.chips, action.payload] };
    case 'REMOVE_CHIPS':
      return { ...state, chips: state.chips.filter(c => c !== action.payload) };
    case 'ADD_SANDWICH':
      return { ...state, sandwiches: [...state.sandwiches, action.payload] };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwiches: state.sandwiches.filter(s => s !== action.payload) };
    case 'EMPTY_BOX':
      return { drinks: [], chips: [], sandwiches: [] };
    default:
      return state;
  }
}
