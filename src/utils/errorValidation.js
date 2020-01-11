import toastr from 'toastr';

export const Alert = {
	error: message => {
		toastr.options.closeButton = true;
		toastr.options.timeOut = 7200;
		toastr.options.preventDuplicates = true;
		toastr.options.progressBar = true;
		toastr.options.rtl = true;
		toastr.error(message);
	},
	success: message => {
		toastr.options.closeButton = true;
		toastr.options.timeOut = 2400;
		toastr.options.preventDuplicates = true;
		toastr.success(message);
	},
	info: message => {
		toastr.options.closeButton = true;
		toastr.options.timeOut = 7200;
		toastr.options.preventDuplicates = true;
		toastr.options.progressBar = true;
		toastr.options.rtl = true;
		toastr.info(message);
	},
};

export const handleErr = error => {
	if (error.response) {
		if (error.response.data.error) {
			return Alert.error(error.response.data.error);
			// console.log(error.response.data.data.error);
		}
		return Alert.error(error.response.data.error);
	}
	return Alert.error(error.message);
};

// export const handleError = error => {
// 	if (error.response) {
// 		if (error.response.data.error) {
// 			return Alert.error(error.response.data.data.error, error.response.data.error.message, 'error');
// 		}
// 		if (error.response.data.data) {
// 			return Alert.error(error.response.data.data.error);
// 		}
// 	}
// 	return Alert.error('', error.message, 'error');
// };
