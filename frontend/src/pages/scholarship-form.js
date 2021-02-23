import React, { useState } from 'react';
import FormScholarship from '../components/Forms/FormScholarship';

const ScholarshipForm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className="form-container">
				<div className="form-header">
					<h1>Scholarship Form</h1>
				</div>
				{!isSubmitted ? (
					<FormScholarship submitForm={submitForm} />
				) : (
					<FormScholarship />
				)}
			</div>
		</>
	);
};

export default ScholarshipForm;
