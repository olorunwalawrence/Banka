import { combineReducers } from 'redux';
import authReducer from './authReducer';
import autoFillInfo from './autoFillInfoReducer';
import BankAccountReducer from './bankAcctReducer';
import ViewProfile from './profileReducer';

export default combineReducers({
	authReducer,
	autoFillInfo,
	BankAccountReducer,
	ViewProfile,
});
