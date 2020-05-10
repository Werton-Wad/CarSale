import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { carSaleReducer } from './reducer';

const reducers = combineReducers({
  carSale: carSaleReducer,
});

const middlewares = applyMiddleware(reduxThunk);

const store = createStore(reducers, middlewares);

export default store;