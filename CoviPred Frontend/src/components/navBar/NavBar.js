import { Button } from '@material-ui/core';
import React from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

function NavBar() {
	return (
		<div className="navbar">
			<div className="navbar__logo">
				<img src="whitelogo.jpg" alt="logo" className="navbar__logoImg" />
				<div>
					<span>Covi</span>
					<span>Pred</span>
				</div>
			</div>

			<div className="navbar__right">
				<Button className="navbar__rightPrediction">
					<Link to="detection" smooth={true} duration={1000}>
						DETECTION
					</Link>
				</Button>
				<Button className="navbar__rightUpdate">UPDATE</Button>
			</div>
		</div>
	);
}

export default NavBar;
