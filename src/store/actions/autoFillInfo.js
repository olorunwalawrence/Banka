import Toastr from 'toastr';
import setAuthToken from '../../utils/setAuthToken';
import { SETAUTOFILLINFO, PROCESSENDED, PROCESSING } from '../actionTypes/types';
import { handleErr } from '../../utils/errorValidation';
import { Axios } from '../../utils/axios';

export const autoFill = user => ({
	type: SETAUTOFILLINFO,
	payload: user,
});

// set auth loading
export const autoFillLoading = () => {
	return {
		type: PROCESSING,
	};
};
export const processEnded = () => {
	return {
		type: PROCESSENDED,
	};
};

export const AutoFill = history => dispatch => {
	dispatch(autoFillLoading());
	const Token = localStorage.getItem('jwtToken');
	setAuthToken(Token);

	Axios('http://localhost:8080/api/v1/user', 'GET')
		.then(user => {
			dispatch(autoFill(user.data.data));
			dispatch(processEnded());
		})
		.catch(err => {
			handleErr(err);
			dispatch(processEnded());
		});
};
