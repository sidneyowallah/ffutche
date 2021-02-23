import { useState, useEffect } from 'react';

const useDonorForm = (callback, validate) => {
	const [values, setValues] = useState({
		type: '',
		firstname: '',
		lastname: '',
		age: '',
		address: '',
		phone: '',
		occupation: '',
		employer: '',
		education: '',
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

export default useDonorForm;
