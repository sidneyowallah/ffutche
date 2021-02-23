import React, { useState } from 'react';
import FormDonor from '../components/Forms/FormDonor';

const DonorForm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className="form-container">
				<div className="form-header">
					<h1>Donor Form</h1>
				</div>
				{!isSubmitted ? <FormDonor submitForm={submitForm} /> : <FormDonor />}
			</div>
		</>
	);
};

export default DonorForm;
