import React from 'react';
import useScholarshipForm from '../../hooks/useScholarshipForm';
import { Button } from '../Button';
import validate from './FormValidate';
import './Form.scss';

const FormScholarship = ({ submitForm }) => {
	const { handleChange, values, handleSubmit, errors } = useScholarshipForm(
		submitForm,
		validate
	);

	return (
		<div className="form-content-right">
			<form className="form" onSubmit={handleSubmit}>
				<div className="row">
					<div className="form-inputs column">
						<label htmlFor="scholarship" className="form-label">
							Scholarship ID
						</label>
						<input
							id="scholarship"
							type="text"
							name="scholarship"
							className="form-input"
							placeholder="Enter scholarship ID"
							value={values.scholarship}
							onChange={handleChange}
						/>
						{errors.scholarship && <p>{errors.scholarship}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="denomination" className="form-label">
							Denomination
						</label>
						<input
							id="denomination"
							type="text"
							name="denomination"
							className="form-input"
							placeholder="Enter Denomination"
							value={values.denomination}
							onChange={handleChange}
						/>
						{errors.denomination && <p>{errors.denomination}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="donor" className="form-label">
							Donor ID
						</label>
						<input
							id="donor"
							type="text"
							name="donor"
							className="form-input"
							placeholder="Enter Donor ID"
							value={values.donor}
							onChange={handleChange}
						/>
						{errors.donor && <p>{errors.donor}</p>}
					</div>
				</div>
				<div className="row">
					<div className="form-inputs column">
						<label htmlFor="studies" className="form-label">
							Studies
						</label>
						<input
							id="studies"
							type="text"
							name="studies"
							className="form-input"
							placeholder="Enter Studies"
							value={values.studies}
							onChange={handleChange}
						/>
						{errors.studies && <p>{errors.studies}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="amount" className="form-label">
							Amount
						</label>
						<input
							id="amount"
							type="text"
							name="amount"
							className="form-input"
							placeholder="Enter Amount"
							value={values.amount}
							onChange={handleChange}
						/>
						{errors.amount && <p>{errors.amount}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="year" className="form-label">
							Academic Year
						</label>
						<input
							id="year"
							type="text"
							name="year"
							className="form-input"
							placeholder="Enter Academic Year"
							value={values.year}
							onChange={handleChange}
						/>
						{errors.year && <p>{errors.year}</p>}
					</div>
				</div>
				<div className="row">
					<div className="form-inputs column address-input">
						<label htmlFor="description" className="form-label">
							Description
						</label>
						<input
							id="description"
							type="text"
							name="description"
							className="form-input"
							placeholder="Enter description"
							value={values.description}
							onChange={handleChange}
						/>
						{errors.description && <p>{errors.description}</p>}
					</div>
				</div>
				<Button className="form-input-btn" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default FormScholarship;
