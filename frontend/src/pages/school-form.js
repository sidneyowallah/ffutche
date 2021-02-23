import React, { useState } from 'react';
import FormSchool from '../components/Forms/FormSchool';

const SchoolForm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className="form-container">
				<div className="form-header">
					<h1>School Form</h1>
				</div>
				{!isSubmitted ? <FormSchool submitForm={submitForm} /> : <FormSchool />}
			</div>
		</>
	);
};

export default SchoolForm;
