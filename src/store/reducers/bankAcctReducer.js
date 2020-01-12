import { CREATEACCOUNT, PROCESSENDED, PROCESSING } from '../actionTypes/types';

const initailState = {
	isLoggedIn: false,
	accountDetails: {},
	loading: false,
};

export default function(state = initailState, action) {
	switch (action.type) {
		case CREATEACCOUNT:
			return {
				...state,
				accountDetails: action.payload,
				loading: true,
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
