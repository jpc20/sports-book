import { FETCH_GAMES } from '../actions/types'

const initialState = {
  games: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GAMES:
      return {
          ...state,
          items: action.payload
      };
    default:
      return state;
  }
}
