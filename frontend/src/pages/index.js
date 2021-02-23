import React from 'react';
import AboutSection from '../components/AboutSection';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import { infoDataOne, infoDataTwo } from '../data/InfoData';
import { sliderData } from '../data/SliderData';

const Home = () => {
	return (
		<>
			<Hero slides={sliderData} />
			<InfoSection {...infoDataOne} />
			<InfoSection {...infoDataTwo} />
		</>
	);
};

export default Home;
