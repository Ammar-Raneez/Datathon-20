import React from 'react';
import { Bar } from 'react-chartjs-2';
import './BarChart.css'

function BarChart({ discharged, hospitalized, deaths }) {
    const barState = {
		labels: ['Discharged', 'Hospitalized', 'Deceased'],
		datasets: [
			{
				label: 'No of People',
				backgroundColor: ['#0f0', '#f00', '#000'],
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: [discharged, hospitalized, deaths],
			}
		]
	};
	return (
		<div>
			<Bar
				data={barState}
				options={{
					title: {
						display: true,
						text: 'Overall Status',
						fontSize: 20,
					},
					legend: {
						display: true,
						position: 'top',
					},
				}}
			/>
		</div>
	);
}

export default BarChart;
