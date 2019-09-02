import { ADD_DRINK } from '../actions/lunchActions';

const initalState = {
  stuff: 'undone'
};

export default function reduce(state = initalState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, stuff: `DOING ${action.payload}` };
    default:
      return state;
  }
}
