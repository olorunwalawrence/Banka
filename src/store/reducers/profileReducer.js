import { VIEWPROFILE, PROCESSENDED, PROCESSING } from '../actionTypes/types';

const initailState = {
	isAutheticated: false,
	data: null,
	loading: false,
};

export default function(state = initailState, action) {
	switch (action.type) {
		case VIEWPROFILE:
			return {
				...state,
				isAutheticated: true,
				data: action.payload,
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
