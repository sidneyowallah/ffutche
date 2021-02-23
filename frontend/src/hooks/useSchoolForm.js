import { useState, useEffect } from 'react';

const useSchoolForm = (callback, validate) => {
	const [values, setValues] = useState({
		name: '',
		address: '',
		city: '',
		state: '',
		country: '',
		type: '',
		contactName: '',
		contactPhone1: '',
		contactPhone2: '',
		academicLevel: '',
		academicYear: '',
		class: '',
		grade: '',
		rank: '',
		degree: '',
		terminated: '',
		terminatedReason: '',
		tuition: '',
		clothing: '',
		furniture: '',
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

export default useSchoolForm;
