import React from 'react';
import successImg from '../../img/success.svg';

const FormSuccess = () => {
	return (
		<div className='form-content-right'>
			<div className='form-success'>Form Success</div>
			<img src={successImg} alt='success' className='form-success-img' />
		</div>
	);
};

export default FormSuccess;
