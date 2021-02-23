import React, { useState } from 'react';
import FormUser from '../components/Forms/FormUser';

const UserForm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className="form-container">
				<div className="form-header">
					<h1>User Form</h1>
				</div>
				{!isSubmitted ? <FormUser submitForm={submitForm} /> : <FormUser />}
			</div>
		</>
	);
};

export default UserForm;
