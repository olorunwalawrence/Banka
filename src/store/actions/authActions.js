import Toastr from 'toastr';
import setAuthToken from '../../utils/setAuthToken';
import { SET_CURRENT_USER, PROCESSENDED, PROCESSING } from '../actionTypes/types';
import { handleErr } from '../../utils/errorValidation';
import { Axios } from '../../utils/axios';

export const auth_user = user => ({
	type: SET_CURRENT_USER,
	payload: user,
});

// set auth loading
export const setAuthLoading = () => {
	return {
		type: PROCESSING,
	};
};
export const processEnded = () => {
	return {
		type: PROCESSENDED,
	};
};

const registerUser = (userData, history) => dispatch => {
	dispatch(setAuthLoading());
	Axios('http://localhost:8080/api/v1/auth/signup', userData, 'POST')
		.then(res => {
			const { token } = res.data.data;
			Toastr.success(res.data.message);
			localStorage.setItem('jwtToken', token);
			setAuthToken(token);
			dispatch(auth_user(res.data));
			dispatch(processEnded());
			history.push('/dashboard');
		})
		.catch(err => {
			handleErr(err);
			dispatch(processEnded());
		});
};

export default registerUser;
