import Toastr from 'toastr';
import setAuthToken from '../../utils/setAuthToken';

import { CREATEACCOUNT, PROCESSENDED, PROCESSING } from '../actionTypes/types';
import { handleErr } from '../../utils/errorValidation';
import { Axios } from '../../utils/axios';

export const createAcct = acct => ({
	type: CREATEACCOUNT,
	payload: acct,
});

export const setLoadingProcess = () => ({
	type: PROCESSING,
});

export const processEnded = () => ({
	type: PROCESSENDED,
});

const AccountCreation = (userData, history) => dispatch => {
	dispatch(setLoadingProcess());
	const token = localStorage.getItem('jwtToken');
	setAuthToken(token);
	Axios('http://localhost:8080/api/v1/accounts', userData, 'POST')
		.then(acct => {
			Toastr.success(acct.data.message);
			dispatch(createAcct(acct.data));
			history.push('/dashboard');
			dispatch(processEnded());
		})
		.catch(err => {
			handleErr(err);
			dispatch(processEnded());
		});
};

export default AccountCreation;
