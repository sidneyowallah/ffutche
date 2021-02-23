import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

import styled from 'styled-components';
import ImageTwo from '../img/slider-2.jpg';

const GalleryHero = styled.div`
	display: grid;
	justify-content: center;
	align-content: center;
	position: relative;
	height: 400px;
	margin-bottom: 30px;
	background-color: #ffffff;
	background: url(${ImageTwo});
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

const ImageGrid = ({ setSelectedImg }) => {
	const { docs } = useFirestore('images');
	return (
		<>
			<GalleryHero>
				<h1>Gallery</h1>
			</GalleryHero>
			<div className='img-grid'>
				{docs &&
					docs.map((doc) => (
						<motion.div
							className='img-wrap'
							key={doc.id}
							layout
							whileHover={{ opacity: 1, scale: 1.02, transition: { duration: 0.2 } }}
							onClick={() => setSelectedImg(doc.url)}
						>
							<motion.img
								src={doc.url}
								alt='grid'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1 }}
							/>
						</motion.div>
					))}
			</div>
		</>
	);
};

export default ImageGrid;
