import React from 'react';
import useRegForm from '../../hooks/useRegForm';
import { Button } from '../Button';
import validate from './FormValidate';
// import './Register.scss';

const FormRegister = ({ submitForm }) => {
	const { handleChange, values, handleSubmit, errors } = useRegForm(
		submitForm,
		validate
	);

	return (
		<div className="form-content-right">
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
						<label htmlFor="phone" className="form-label">
							Phone Number
						</label>
						<input
							id="phone"
							type="phone"
							name="phone"
							className="form-input"
							placeholder="Enter phone"
							value={values.phone}
							onChange={handleChange}
						/>
						{errors.phone && <p>{errors.phone}</p>}
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
				<button className="form-input-btn" type="submit">
					Sign Up
				</button>
				<span className="form-input-login">
					Already have an account? Login <a href="#">Here</a>
				</span>
			</form>
		</div>
	);
};

export default FormRegister;
