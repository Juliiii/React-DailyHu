import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducer';
import { getMeta } from './actions';

const middleware = applyMiddleware(
  thunkMiddleware,
);


const store = createStore(reducer, middleware);
console.log(store.getState());

store.dispatch(getMeta())

export default store;