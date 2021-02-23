import React from 'react';
import useSchoolForm from '../../hooks/useSchoolForm';
import { Button } from '../Button';
import validate from './FormValidate';
import './Form.scss';

const FormSchool = ({ submitForm }) => {
	const { handleChange, values, handleSubmit, errors } = useSchoolForm(
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
							placeholder="Enter name ID"
							value={values.name}
							onChange={handleChange}
						/>
						{errors.name && <p>{errors.name}</p>}
					</div>
					<div className="form-inputs column">
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
					<div className="form-inputs column">
						<label htmlFor="city" className="form-label">
							City
						</label>
						<input
							id="city"
							type="text"
							name="city"
							className="form-input"
							placeholder="Enter city ID"
							value={values.city}
							onChange={handleChange}
						/>
						{errors.city && <p>{errors.city}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="state" className="form-label">
							State
						</label>
						<input
							id="state"
							type="text"
							name="state"
							className="form-input"
							placeholder="Enter State"
							value={values.state}
							onChange={handleChange}
						/>
						{errors.state && <p>{errors.state}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="country" className="form-label">
							Country
						</label>
						<input
							id="country"
							type="text"
							name="country"
							className="form-input"
							placeholder="Enter country"
							value={values.country}
							onChange={handleChange}
						/>
						{errors.country && <p>{errors.country}</p>}
					</div>
				</div>
				<div className="row">
					<div className="form-inputs column">
						<label htmlFor="type" className="form-label">
							Type of School
						</label>
						<input
							id="type"
							type="text"
							name="type"
							className="form-input"
							placeholder="Enter Type of School"
							value={values.type}
							onChange={handleChange}
						/>
						{errors.type && <p>{errors.type}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="contactName" className="form-label">
							Contact Name
						</label>
						<input
							id="contactName"
							type="text"
							name="contactName"
							className="form-input"
							placeholder="Enter Contact Name"
							value={values.contactName}
							onChange={handleChange}
						/>
						{errors.contactName && <p>{errors.contactName}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="contactPhone1" className="form-label">
							Contact Phone Number 1
						</label>
						<input
							id="contactPhone1"
							type="text"
							name="contactPhone1"
							className="form-input"
							placeholder="Enter Contact Phone 1"
							value={values.contactPhone1}
							onChange={handleChange}
						/>
						{errors.contactPhone1 && <p>{errors.contactPhone1}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="contactPhone2" className="form-label">
							Contact Phone Number 2
						</label>
						<input
							id="contactPhone2"
							type="text"
							name="contactPhone2"
							className="form-input"
							placeholder="Enter Contact Phone 2"
							value={values.contactPhone2}
							onChange={handleChange}
						/>
						{errors.contactPhone2 && <p>{errors.contactPhone2}</p>}
					</div>
				</div>
				<div className="row">
					<div className="form-inputs column">
						<label htmlFor="academicLevel" className="form-label">
							Academic Level
						</label>
						<input
							id="academicLevel"
							type="text"
							name="academicLevel"
							className="form-input"
							placeholder="Enter Academic Level"
							value={values.academicLevel}
							onChange={handleChange}
						/>
						{errors.academicLevel && <p>{errors.academicLevel}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="academicYear" className="form-label">
							Academic Year
						</label>
						<input
							id="academicYear"
							type="text"
							name="academicYear"
							className="form-input"
							placeholder="Enter Academic Year"
							value={values.academicYear}
							onChange={handleChange}
						/>
						{errors.academicYear && <p>{errors.academicYear}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="class" className="form-label">
							Academic Year
						</label>
						<input
							id="class"
							type="text"
							name="class"
							className="form-input"
							placeholder="Enter Class"
							value={values.class}
							onChange={handleChange}
						/>
						{errors.class && <p>{errors.class}</p>}
					</div>
				</div>
				<div className="row">
					<div className="form-inputs column">
						<label htmlFor="grade" className="form-label">
							Grade
						</label>
						<input
							id="grade"
							type="text"
							name="grade"
							className="form-input"
							placeholder="Enter Grade"
							value={values.grade}
							onChange={handleChange}
						/>
						{errors.grade && <p>{errors.grade}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="rank" className="form-label">
							Rank
						</label>
						<input
							id="rank"
							type="text"
							name="rank"
							className="form-input"
							placeholder="Enter Rank"
							value={values.rank}
							onChange={handleChange}
						/>
						{errors.rank && <p>{errors.rank}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="degree" className="form-label">
							Degree
						</label>
						<input
							id="degree"
							type="text"
							name="degree"
							className="form-input"
							placeholder="Enter Degree"
							value={values.degree}
							onChange={handleChange}
						/>
						{errors.degree && <p>{errors.degree}</p>}
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

export default FormSchool;
