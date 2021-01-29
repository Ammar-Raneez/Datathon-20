import React, { useEffect, useState } from 'react';
import {MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Maps.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { useState } from 'react';
import { drawMarkers } from './maputils';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

const province_lat_lng = [
	{
		prov: "Central",
		lat: 7.2565,
		lng: 80.7214,
		// total: ,
	},
	{
		prov: "Western",
		lat: 6.9016,
		lng: 80.0088,
		// total: ,
	},
	{
		prov: "Sabaragamuwa",
		lat: 6.7396,
		lng: 80.3659,
		// total: ,
	},
	{
		prov: "Southern",
		lat: 6.2374,
		lng: 80.5438,
		// total: ,
	},
	{
		prov: "Uva",
		lat: 6.8428,
		lng: 81.3399,
		// total: ,
	},
	{
		prov: "Eastern",
		lat: 7.7853,
		lng: 81.4279,
		// total: ,
	},
	{
		prov: "Northern",
		lat: 8.8855,
		lng: 80.2767,
		// total: ,
	},
	{
		prov: "North Central",
		lat: 8.1996,
		lng: 80.6327,
		// total: ,
	},
	{
		prov: "North Western",
		lat: 7.7584,
		lng: 80.1875,
		// total: ,
	}
]

const provinceDictionary = {'Western':['Colombo','Gampaha','Kalutara','Peliyagoda','Godagama','Welisara','Kendalanda'],
							'Central':['Kandy','Matale','Nuwara Eliya'],
							'Nothern':['Jaffna','Kilinochchi','Mannar','Mullaitivu','Vavuniya'],
							'Southern':['Galle','Hambantota','Matara'],
							'Uva':['Badulla','Moneragala'],
							'Sabaragamuwa':['Ratnapura','Kegalle'],
							'North Western':['Kurunegala','Puttalam'],
							'North Cehntral':['Polonnaruwa','Anuradhapura'],
							'Eastern':['Batticaloa','Trincomalee','Ampara']
						}

function Maps() {
	const [data, setData] = useState([]);
	const [provinces, setProvinces] = useState([]);
	// useEffect(() => {
	// 	fetch("https://covid-19sl.s3-ap-northeast-1.amazonaws.com/data.json")
	// 		.then(res => res.json())
	// 		.then(data => setData(data))
	// }, [])


	const classes = useStyles();
	var dateNow = new Date();
	var currentDate = '';
	// const [responseData, setResponseData] = useState(null);

	const selectedDateHandle = (event) => {
		const selectedDate = event.target.value;
		console.log(selectedDate);

		// GET REQUEST FOR THE RESULT
		// const fetchData = async () => {
		// 	const response = await fetch('endpoint' + selectedDate)
		// 		.then((res) => res.json())
		// 		.catch((err) => console.log(err + ' <---- error message'));
		// 	console.log(response);
		// 	setResponseData(response);
		// };
	};

	if (dateNow.getDate() < 10) {
		currentDate = dateNow.getFullYear() + '-' + (dateNow.getMonth() + 1) + '-0' + dateNow.getDate();
	} else {
		currentDate = dateNow.getFullYear() + '-' + (dateNow.getMonth() + 1) + '-' + dateNow.getDate();
	}

	return (
		<div className="map">
			{/* datepicker */}
			<div className="map__datePicker">
				<form className={classes.container} noValidate>
					<TextField
						id="date"
						label="Select date"
						type="date"
						defaultValue={currentDate}
						onChange={selectedDateHandle}
						className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</form>
			</div>

			{/* map */}
			<div className="map__body">
			<MapContainer center={[7.8731, 80.7718]} zoom={8} scrollWheelZoom={false}>
				<TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				{drawMarkers(province_lat_lng)}
			</MapContainer>
			</div>
		</div>
	);
}

export default Maps;
