import { useState, useEffect } from 'react';

const useScholarshipForm = (callback, validate) => {
	const [values, setValues] = useState({
		scholarship: '',
		denomination: '',
		donor: '',
		studies: '',
		amount: '',
		year: '',
		description: '',
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

export default useScholarshipForm;
