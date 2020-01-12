import { combineReducers } from 'redux';
import authReducer from './authReducer';
import autoFillInfo from './autoFillInfoReducer';

export default combineReducers({
	authReducer,
	autoFillInfo,
});
