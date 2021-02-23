import React, { useState } from 'react';
import FormRegister from './FormRegister';
import FormSuccess from './FormSuccess';
// import './Register.scss';

const Index = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}

	return (
		<>
			<div className="form-container">
				<div className="form-header">
					<h1>Registration Form</h1>
				</div>
				{!isSubmitted ? (
					<FormRegister submitForm={submitForm} />
				) : (
					<FormSuccess />
				)}
			</div>
		</>
	);
};

export default Index;
