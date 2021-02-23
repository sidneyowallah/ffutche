import React, { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import ImageModal from '../components/ImageModal';
// import UploadForm from '../components/UploadForm';

const Gallery = () => {
	const [selectedImg, setSelectedImg] = useState(null);
	return (
		<div className='gallery-container'>
			{/* <UploadForm /> */}
			<ImageGrid setSelectedImg={setSelectedImg} />
			{selectedImg && <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
		</div>
	);
};

export default Gallery;
