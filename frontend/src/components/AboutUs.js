import React from 'react';
import styled from 'styled-components';
import { AboutData } from '../data/AboutData';
import ImageOne from '../img/slider-1.jpg';
import ImageTwo from '../img/slider-2.jpg';
import ImageThree from '../img/slider-2.jpg';

const Section = styled.section`
	width: 100%;
	height: 100%;
`;
const AboutGridContainer = styled.div`
	margin-top: 50px;
	padding: 3rem calc(100vw - 1300px) / 2;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 20px;

	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;
const AboutItem = styled.div`
	margin-bottom: 30px;
	background-color: #ffffff;
	box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
	transition: all 0.4s ease;
	padding: 20px;
	h1 {
		margin: 20px;
		color: #fe5a36;
		font-size: 3.28571em;
		line-height: 1.4em;
		letter-spacing: -0.2px;
		text-align: center;
	}
	p {
		font-size: 1.5rem;
		font-weight: 300;
	}
`;

const AboutHero = styled.div`
	display: grid;
	justify-content: center;
	align-content: center;
	position: relative;
	height: 400px;
	margin-bottom: 30px;
	background-color: #ffffff;
	background: url(${ImageOne});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	text-align: center;
	h1 {
		color: #fff;
		font-size: 3.28571em;
		line-height: 1.4em;
		letter-spacing: -0.2px;
		text-align: center;
		text-shadow: 0px 3px 5px 0px;
	}
`;

const AboutUs = () => {
	return (
		<Section>
			<AboutHero>
				<h1>About US</h1>
			</AboutHero>
			<AboutGridContainer>
				{AboutData.map((item, index) => (
					<AboutItem key={index}>
						<h1>{item.heading}</h1>
						<p>{item.paragraph}</p>
					</AboutItem>
				))}
			</AboutGridContainer>
		</Section>
	);
};

export default AboutUs;
