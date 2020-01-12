import { combineReducers } from 'redux';
import authReducer from './authReducer';
import autoFillInfo from './autoFillInfoReducer';
import BankAccountReducer from './bankAcctReducer';

export default combineReducers({
	authReducer,
	autoFillInfo,
	BankAccountReducer,
});
