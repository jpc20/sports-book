import { FETCH_GAMES } from './types';

export const fetchGames = () => dispatch => {
    fetch(
      'https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2020?key=a6cb87c7e7704881b07257413255b2e0'
    ).then((res) => res.json())
    .then((games) =>
      dispatch({
        type: FETCH_GAMES,
        payload: games
      })
    );
  }
