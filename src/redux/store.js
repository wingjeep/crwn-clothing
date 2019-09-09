//reducer and middleware needed for store
import {
  createStore,
  applyMiddleware
} from 'redux';

import logger from 'redux-logger';

import rootReduxer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReduxer, applyMiddleware(...middlewares))

export default store;