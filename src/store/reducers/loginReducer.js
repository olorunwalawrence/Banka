import { LOGINUSER, PROCESSENDED, PROCESSING } from '../actionTypes/types';

const initialState = {
	isLoggedIn: false,
	user: {},
	loading: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOGINUSER:
			return {
				...state,
				isLoggedIn: true,
				user: action.payload,
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
