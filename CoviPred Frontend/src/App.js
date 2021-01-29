import React, { useEffect, useState } from 'react';
import './App.css';
import HeaderCard from './components/headerCards/HeaderCard';
import NavBar from './components/navBar/NavBar';
import Maps from './components/Maps/Maps';
import BarChart from './components/BarChart/BarChart';
import LineChart from './components/LineChart/LineChart';
import ImageUploader from './components/ImageUploader/ImageUploader';

function App() {
	const [allCases, setAllCases] = useState([]);
	useEffect(() => {
		fetch("https://hpb.health.gov.lk/api/get-current-statistical")
			.then(res => res.json())
			.then(data => setAllCases(data))
	}, [])

	return (
		<div className="app">
			<NavBar />
			<div className="app__cards">
				<HeaderCard title="Active Cases" cases={allCases && allCases.data?.local_active_cases} total={allCases && allCases.data?.local_total_cases} color="red" />
				<HeaderCard title="Total Recoveries" cases={allCases && allCases.data?.local_recovered} total={allCases && allCases.data?.local_recovered} color="green" />
				<HeaderCard title="Today Deaths" cases={allCases && allCases.data?.local_new_deaths} total={allCases && allCases.data?.local_deaths} color="black" />
			</div>
			<Maps />

			<div className="app__charts">
				<div className="app__chartsBar">
					<BarChart discharged={allCases && allCases.data?.local_recovered} 
						hospitalized={allCases && allCases.data?.local_total_number_of_individuals_in_hospitals}
						deaths={allCases && allCases.data?.local_deaths}
					/>
				</div>

				<div className="app__chartsLine">
					<LineChart cases={allCases && allCases.data?.daily_pcr_testing_data} />
				</div>
			</div>
			{/* detector */}
			<div className="app__covDetector" id="detection">
				<div className="app__covDetectorHead">
					<h1>COVID-19 DETECTOR</h1>
					<p>
						To use this, you have to upload an image of a human chest xray and then click on detect to get the result.
					</p>
				</div>

				<div className="app__covDetectorImgUpload">
					<ImageUploader />
				</div>
			</div>
		</div>
	);
}

export default App;
