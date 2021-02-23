import { useState, useEffect } from 'react';

const useRegForm = (callback, validate) => {
	const [values, setValues] = useState({
		username: '',
		password: '',
		password2: '',
		firstname: '',
		middlename: '',
		lastname: '',
		gender: '',
		address: '',
		city: '',
		state: '',
		zipcode: '',
		email: '',
		phone: '',
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
	}, [errors]);

	return { handleChange, values, handleSubmit, errors };
};

export default useRegForm;
