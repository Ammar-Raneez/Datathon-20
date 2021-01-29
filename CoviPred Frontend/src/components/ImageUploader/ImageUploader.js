import React, { useEffect, useRef, useState } from 'react';
import './ImageUploader.css';
// import axios from 'axios';
import { Button } from '@material-ui/core';

function ImageUploader() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [output, setOutput] = useState(null);
	const hiddenFileInput = useRef(null);
	const [loading, setLoading] = useState(false);
	const [displaySampleInput, setDisplaySampleInput] = useState(true);
	const [detectedBool, setdetectedBool] = useState(false);

	useEffect(() => {
		if (output === null) {
			setdetectedBool(false);
			// setDisplaySampleInput(true);
		} else {
			setdetectedBool(true);
		}
	}, [output]);

	const fileSelectedHandler = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	const fileUploadHandler = () => {
		// console.log(selectedFile);

		setLoading(true);
		setDisplaySampleInput(false);
		setdetectedBool(false);
		// const formData = new FormData();
		// formData.append('image', selectedFile, selectedFile.name);
		// axios
		// 	.post('endpointLink', formData )
		// 	.then((res) => {
		//         setLoading(false);
		//         console.log('Output from the back end');
		//         setOutput(res)
		// 	});

		// testing purposes
		setTimeout(() => {
			setLoading(false);
			setOutput('COVID-19');
		}, 800);
	};

	const handleClick = (event) => {
		hiddenFileInput.current.click();
		setOutput(null);
		setDisplaySampleInput(true);
	};

	return (
		<div className="imageUploader">
			<div>
				{displaySampleInput && (
					<div className="imageUploaderSampleImage">
						<h3>Sample Image Input </h3>
						<img
							src="https://prod-images-static.radiopaedia.org/images/157210/332aa0c67cb2e035e372c7cb3ceca2_jumbo.jpg"
							alt=""
						/>
					</div>
				)}

				{loading && (
					<div>
						<img
							src="https://i.pinimg.com/originals/59/22/20/5922208e18658f5e83b6ad801b895f71.gif"
							className="loadingProgress"
							alt=""
						/>
					</div>
				)}
			</div>

			{detectedBool && (
				<div className="detectedOutputResult">
					{/* <h1>{output}</h1> */}
					<h1>{output}</h1>
				</div>
			)}

			<div className="imageUploader__buttons">
				{/* <h3>Upload Image </h3> */}
				<input style={{ display: 'none' }} type="file" ref={hiddenFileInput} onChange={fileSelectedHandler} />
				<div>
					<Button onClick={handleClick}>Pick File</Button>
					<Button onClick={fileUploadHandler} disabled = {selectedFile===null}>DETECT</Button>
				</div>
			</div>
			<br/>
		</div>
	);
}

export default ImageUploader;
