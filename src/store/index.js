import { createStore } from 'redux';
import reactotron from '../config/ReactotronConfig';
import reducers from './reducers';

const store = createStore(reducers, reactotron.createEnhancer());

export default store;
