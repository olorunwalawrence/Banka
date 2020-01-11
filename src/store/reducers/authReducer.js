import { SET_CURRENT_USER, LOGINUSER, PROCESSENDED, PROCESSING } from '../actionTypes/types';

const initialState = {
	isAuthenticated: false,
	user: {},
	loading: false,
	isLoggedIn: false,
};
export default function(state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			};
		case LOGINUSER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
				isLoggedIn: true,
			};
		case PROCESSING:
			return {
				...state,
				loading: true,
			};
		case PROCESSENDED:
			return {
				...state,
				loading: false,
			};

		default:
			return state;
	}
}
