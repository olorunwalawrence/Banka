import axios from 'axios';

export const Axios = (url, data, method) => {
	return axios({
		url,
		data,
		method,
		mode: 'no-cors',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	});
};
