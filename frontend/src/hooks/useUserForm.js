import { useState, useEffect } from 'react';

const useUserForm = (callback, validate) => {
	const [values, setValues] = useState({
		username: '',
		password: '',
		password2: '',
		firstname: '',
		middlename: '',
		lastname: '',
		type: '',
		address: '',
		city: '',
		state: '',
		zipcode: '',
		email: '',
		phone1: '',
		phone2: '',
		dateOfBirth: '',
		cityOfBirth: '',
		stateOfBirth: '',
		countryOfBirth: '',
		gender: '',
		maritalStatus: '',
		childrenNo: '',
		occupation: '',
		employerName: '',
		employerAddress: '',
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors, isSubmitting, callback]);

	return { handleChange, values, handleSubmit, errors };
};

export default useUserForm;
