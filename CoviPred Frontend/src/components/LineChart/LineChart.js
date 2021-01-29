import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ cases }) {
	const lineState = {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
		],
		datasets: [
			{
				label: 'No of Cases',
				backgroundColor: '#f00',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: [0, cases && cases[11].count, cases && cases[42].count, cases && cases[72].count,
						cases && cases[103].count, cases && cases[33].count, cases && cases[164].count,
						cases && cases[195].count, cases && cases[225].count, cases && cases[256].count,
						cases && cases[257].count
					],
			},
		],
	};

	return (
		<div>
			<Line
				data={lineState}
				options={{
					title: {
						display: true,
						text: 'Trend in Cases',
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

export default LineChart;
