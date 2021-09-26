import { combineReducers } from 'redux';
import { gameReducer } from './game';
import { userReducer } from './user';

const reducers = combineReducers({
  game: gameReducer,
  user: userReducer,
});

export default reducers;
