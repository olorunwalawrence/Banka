import jwt_decode from 'jwt-decode';
import Toastr from 'toastr';
import { LOGINUSER, PROCESSENDED, PROCESSING } from '../actionTypes/types';
import { handleErr } from '../../utils/errorValidation';
import { Axios } from '../../utils/axios';
import setAuthToken from '../../utils/setAuthToken';

export const setLoginUser = user => ({
	type: LOGINUSER,
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

export const LoginUserAuth = (userData, history) => dispatch => {
	dispatch(setAuthLoading());
	Axios('http://localhost:8080/api/v1/auth/login', userData, 'POST')
		.then(res => {
			const { token } = res.data.data;
			Toastr.success(res.data.message);
			localStorage.setItem('jwtToken', token);
			const Token = setAuthToken(token);
			dispatch(setLoginUser(Token));
			dispatch(processEnded());
			history.push('/dashboard');
		})
		.catch(err => {
			handleErr(err);
			dispatch(processEnded());
		});
};
