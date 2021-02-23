import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
	width: 100%;
	height: 100%;
	padding: 4rem 0rem;
`;
const CampaignGridContainer = styled.div`
	margin-top: -150px;
	padding: 3rem calc(100vw - 1300px) / 2;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 20px;

	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;
const CampaignItem = styled.div`
	z-index: 100;
	height: 400px;
	margin-bottom: 30px;
	background-color: #ffffff;
	box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
	transition: all 0.4s ease;
`;

const AboutSection = () => {
	return (
		<Section>
			<CampaignGridContainer>
				<CampaignItem></CampaignItem>
				<CampaignItem></CampaignItem>
				<CampaignItem></CampaignItem>
			</CampaignGridContainer>
		</Section>
	);
};

export default AboutSection;
