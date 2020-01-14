import { PROCESSING, PROCESSENDED } from '../store/actionTypes/types';

export const setLoadingProcess = () => ({
	type: PROCESSING,
});

export const processEnded = () => ({
	type: PROCESSENDED,
});
