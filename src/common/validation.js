
export const validateEmail = (email) => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}



export const validateName = (name) => {
	var re = /^[-'.a-zA-Z\s][a-zA-Z\s][a-zA-Z'.-\s]*$/;
	return re.test(String(name).toLowerCase());
}

export const validatePhone = (phone) => {
	var re = /^((961[\s+-]*(3|7(0|1)))|(03|7(0|1)))[\s+-]*\d{6}$/;
	return re.test(String(phone).toLowerCase());
}

export const validateNumber = (number) => {
	var re = /^[0-9]*$/
	return re.test(String(number).toLowerCase());
}
export const validateExpiryDate = (date) => {
	var re = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/
	return re.test(String(date).toLowerCase());
}


