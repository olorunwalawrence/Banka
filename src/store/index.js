import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/index';

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const middleWare = [thunk];

export default createStore(combineReducers, composeEnhancers(applyMiddleware(...middleWare)));
