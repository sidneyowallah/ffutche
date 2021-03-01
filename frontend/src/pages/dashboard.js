import React from 'react';
import { Button } from '../components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
	width: 100%;
	height: 100%;
	padding: 4rem 0rem;
`;
const DashboardGridContainer = styled.div`
	margin: 15px;
	padding: 3rem calc(100vw - 1300px) / 2;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 20px;

	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;
const DashboardItem = styled(Link)`
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	border: none;
	text-decoration: none;
	white-space: nowrap;
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	font-size: 2rem;
	color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
	padding: ${({ big }) => (big ? '16px 40px' : '10px 22px')};
	margin: ${({ margin }) => (margin ? '20px 0px' : 'none')};
	background: ${({ primary }) =>
		primary
			? 'linear-gradient(90deg, #FE5A36 0%, #F61D73 100%)'
			: 'linear-gradient(90deg, #F61D73 0%, #FE5A36 100%)'};

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: translateY(-2px);
		color: #fff;
		background: ${({ primary }) =>
			primary
				? 'linear-gradient(90deg, #F61D73 0%, #FE5A36 100%)'
				: 'linear-gradient(90deg, #FE5A36 0%, #F61D73 100%)'};
	}
`;

const Dashboard = () => {
	return (
		<Section>
			<DashboardGridContainer>
				<DashboardItem to="/user-form"> User Form</DashboardItem>
				<DashboardItem to="/donor-form"> Donor Form</DashboardItem>
				<DashboardItem to="/scholarship-form">Scholarships Form</DashboardItem>
				<DashboardItem to="/school-form"> Schools Form</DashboardItem>
			</DashboardGridContainer>
		</Section>
	);
};

export default Dashboard;
