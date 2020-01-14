import Toastr from 'toastr';
import jwt_decode from 'jwt-decode';
import { VIEWPROFILE } from '../actionTypes/types';

import setAuthToken from '../../utils/setAuthToken';
import { handleErr } from '../../utils/errorValidation';
import { Axios } from '../../utils/axios';

import { processEnded, setLoadingProcess } from '../../utils/loading';

const viewProfile = profile => ({
	type: VIEWPROFILE,
	payload: profile,
});

const viewMyProfiles = history => dispatch => {
	const token = localStorage.getItem('jwtToken');
	dispatch(setLoadingProcess());
	setAuthToken(token);
	const decoded = jwt_decode(token);
	const { email } = decoded;

	Axios(`http://localhost:8080/api/v1/user/gloria_awrencee@yahoo.com/accounts`, 'GET')
		.then(result => {
			dispatch(viewProfile(result.data.data));
			dispatch(processEnded());
		})
		.catch(err => {
			handleErr(err);
			dispatch(processEnded());
		});
};

export default viewMyProfiles;
