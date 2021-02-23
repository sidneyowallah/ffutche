import React from 'react';
import useDonorForm from '../../hooks/useDonorForm';
import { Button } from '../Button';
import validate from './FormValidate';
import './Form.scss';

const FormDonor = ({ submitForm }) => {
	const { handleChange, values, handleSubmit, errors } = useDonorForm(
		submitForm,
		validate
	);

	return (
		<div className="form-content-right">
			<form className="form" onSubmit={handleSubmit}>
				<div className="row">
					<div className="form-inputs column">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							id="name"
							type="text"
							name="name"
							className="form-input"
							placeholder="Enter Donor Name"
							value={values.name}
							onChange={handleChange}
						/>
						{errors.name && <p>{errors.name}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="occupation" className="form-label">
							Occupation
						</label>
						<input
							id="occupation"
							type="text"
							name="occupation"
							className="form-input"
							placeholder="Enter Occupation"
							value={values.occupation}
							onChange={handleChange}
						/>
						{errors.occupation && <p>{errors.occupation}</p>}
					</div>
				</div>
				<div className="row">
					<div className="form-inputs column  address-input">
						<label htmlFor="address" className="form-label">
							Address
						</label>
						<input
							id="address"
							type="text"
							name="address"
							className="form-input"
							placeholder="Enter Address"
							value={values.address}
							onChange={handleChange}
						/>
						{errors.address && <p>{errors.address}</p>}
					</div>
				</div>
				<div className="row">
					<div className="form-inputs column">
						<label htmlFor="phone" className="form-label">
							Phone Number
						</label>
						<input
							id="phone"
							type="text"
							name="phone"
							className="form-input"
							placeholder="Enter phone"
							value={values.phone}
							onChange={handleChange}
						/>
						{errors.phone && <p>{errors.phone}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="scholarship" className="form-label">
							Scholarship
						</label>
						<input
							id="scholarship"
							type="text"
							name="scholarship"
							className="form-input"
							placeholder="Enter scholarship"
							value={values.scholarship}
							onChange={handleChange}
						/>
						{errors.scholarship && <p>{errors.scholarship}</p>}
					</div>
				</div>
				<Button className="form-input-btn" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default FormDonor;
