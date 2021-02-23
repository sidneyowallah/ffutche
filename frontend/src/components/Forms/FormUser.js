import React from 'react';
import useUserForm from '../../hooks/useUserForm';
import { Button } from '../Button';
import validate from './FormValidate';
import './Form.scss';

const FormUser = ({ submitForm }) => {
	const { handleChange, values, handleSubmit, errors } = useUserForm(
		submitForm,
		validate
	);

	return (
		<div className="form-content">
			<form className="form" onSubmit={handleSubmit}>
				<div className="row">
					<div className="form-inputs column">
						<label htmlFor="firstname" className="form-label">
							First Name
						</label>
						<input
							id="firstname"
							type="text"
							name="firstname"
							className="form-input"
							placeholder="Enter firstname"
							value={values.firstname}
							onChange={handleChange}
						/>
						{errors.firstname && <p>{errors.firstname}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="lastname" className="form-label">
							Last Name
						</label>
						<input
							id="lastname"
							type="text"
							name="lastname"
							className="form-input"
							placeholder="Enter lastname"
							value={values.lastname}
							onChange={handleChange}
						/>
						{errors.lastname && <p>{errors.lastname}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="middlename" className="form-label">
							Middle Name
						</label>
						<input
							id="middlename"
							type="text"
							name="middlename"
							className="form-input"
							placeholder="Enter middlename"
							value={values.middlename}
							onChange={handleChange}
						/>
						{errors.middlename && <p>{errors.middlename}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="gender" className="form-label">
							Gender
						</label>
						<input
							id="gender"
							type="text"
							name="gender"
							className="form-input"
							placeholder="Enter gender"
							value={values.gender}
							onChange={handleChange}
						/>
						{errors.gender && <p>{errors.gender}</p>}
					</div>
				</div>
				<div className="row">
					<div className="form-inputs column">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							id="email"
							type="email"
							name="email"
							className="form-input"
							placeholder="Enter email"
							value={values.email}
							onChange={handleChange}
						/>
						{errors.email && <p>{errors.email}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="phone1" className="form-label">
							Phone Number 1
						</label>
						<input
							id="phone1"
							type="phone"
							name="phone1"
							className="form-input"
							placeholder="Enter phone 1"
							value={values.phone1}
							onChange={handleChange}
						/>
						{errors.phone1 && <p>{errors.phone1}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="phone2" className="form-label">
							Phone Number 2
						</label>
						<input
							id="phone2"
							type="phone"
							name="phone"
							className="form-input"
							placeholder="Enter phone 2"
							value={values.phone2}
							onChange={handleChange}
						/>
						{errors.phone2 && <p>{errors.phone2}</p>}
					</div>
				</div>
				<div className="row">
					<div className="form-inputs column">
						<label htmlFor="dateOfBirth" className="form-label">
							Date of Birth
						</label>
						<input
							id="dateOfBirth"
							type="text"
							name="dateOfBirth"
							className="form-input"
							placeholder="Enter Date of Birth"
							value={values.dateOfBirth}
							onChange={handleChange}
						/>
						{errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="cityOfBirth" className="form-label">
							City of Birth
						</label>
						<input
							id="cityOfBirth"
							type="text"
							name="cityOfBirth"
							className="form-input"
							placeholder="Enter City of Birth"
							value={values.cityOfBirth}
							onChange={handleChange}
						/>
						{errors.cityOfBirth && <p>{errors.cityOfBirth}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="stateOfBirth" className="form-label">
							State of Birth
						</label>
						<input
							id="stateOfBirth"
							type="text"
							name="stateOfBirth"
							className="form-input"
							placeholder="Enter state of Birth"
							value={values.stateOfBirth}
							onChange={handleChange}
						/>
						{errors.stateOfBirth && <p>{errors.stateOfBirth}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="countryOfBirth" className="form-label">
							country of Birth
						</label>
						<input
							id="countryOfBirth"
							type="text"
							name="countryOfBirth"
							className="form-input"
							placeholder="Enter country of Birth"
							value={values.countryOfBirth}
							onChange={handleChange}
						/>
						{errors.countryOfBirth && <p>{errors.countryOfBirth}</p>}
					</div>
				</div>
				<div className="row">
					<div className="form-inputs column">
						<label htmlFor="maritalStatus" className="form-label">
							Marital Status
						</label>
						<input
							id="maritalStatus"
							type="text"
							name="maritalStatus"
							className="form-input"
							placeholder="Enter Marital Status"
							value={values.maritalStatus}
							onChange={handleChange}
						/>
						{errors.maritalStatus && <p>{errors.maritalStatus}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="childrenNo" className="form-label">
							Number of Children
						</label>
						<input
							id="childrenNo"
							type="text"
							name="childrenNo"
							className="form-input"
							placeholder="Enter Number of Children"
							value={values.childrenNo}
							onChange={handleChange}
						/>
						{errors.childrenNo && <p>{errors.childrenNo}</p>}
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
					<div className="form-inputs column">
						<label htmlFor="employerName" className="form-label">
							Employer Name
						</label>
						<input
							id="employerName"
							type="text"
							name="employerName"
							className="form-input"
							placeholder="Enter Employer Name"
							value={values.employerName}
							onChange={handleChange}
						/>
						{errors.employerName && <p>{errors.employerName}</p>}
					</div>
					<div className="form-inputs column address-input">
						<label htmlFor="employerAddress" className="form-label">
							Employer Address
						</label>
						<input
							id="employerAddress"
							type="text"
							name="employerAddress"
							className="form-input"
							placeholder="Enter Employer Address"
							value={values.employerAddress}
							onChange={handleChange}
						/>
						{errors.employerAddress && <p>{errors.employerAddress}</p>}
					</div>
				</div>
				<div className="row">
					<div className="form-inputs column address-input">
						<label htmlFor="address" className="form-label">
							Address
						</label>
						<input
							id="address"
							type="text"
							name="address"
							className="form-input"
							placeholder="Enter address"
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
							placeholder="Enter city"
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
							placeholder="Enter state"
							value={values.state}
							onChange={handleChange}
						/>
						{errors.state && <p>{errors.state}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="zipcode" className="form-label">
							Zipcode
						</label>
						<input
							id="zipcode"
							type="text"
							name="zipcode"
							className="form-input"
							placeholder="Enter zipcode"
							value={values.zipcode}
							onChange={handleChange}
						/>
						{errors.zipcode && <p>{errors.zipcode}</p>}
					</div>
				</div>
				<div className="row">
					<div className="form-inputs column">
						<label htmlFor="username" className="form-label">
							Username
						</label>
						<input
							id="username"
							type="text"
							name="username"
							className="form-input"
							placeholder="Enter Username"
							value={values.username}
							onChange={handleChange}
						/>
						{errors.username && <p>{errors.username}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							id="password"
							type="password"
							name="password"
							className="form-input"
							placeholder="Enter password"
							value={values.password}
							onChange={handleChange}
						/>
						{errors.password && <p>{errors.password}</p>}
					</div>
					<div className="form-inputs column">
						<label htmlFor="password2" className="form-label">
							Confirm Password
						</label>
						<input
							id="password2"
							type="password"
							name="password2"
							className="form-input"
							placeholder="Enter password"
							value={values.password2}
							onChange={handleChange}
						/>
						{errors.password2 && <p>{errors.password2}</p>}
					</div>
				</div>
				<Button className="form-input-btn" type="submit">
					Sign Up
				</Button>
			</form>
		</div>
	);
};

export default FormUser;
