import { FETCH_GAMES } from '../actions/types';

const initialState = {
  items: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GAMES:
    console.log(state);
      return {
          ...state,
          items: action.payload
      };
    default:
      return state;
  }
}
