import { combineReducers } from 'redux';
import { gameReducer } from './game';
import { leaderboardReducer } from './leaderboard';
import { regionReducer } from './region';
import { userReducer } from './user';

const reducers = combineReducers({
  game: gameReducer,
  user: userReducer,
  leaderboard: leaderboardReducer,
  region: regionReducer,
});

export default reducers;
