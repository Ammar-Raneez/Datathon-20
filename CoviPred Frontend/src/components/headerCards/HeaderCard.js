import React from 'react';
import './HeaderCard.css';
import { Card, CardContent, Typography } from '@material-ui/core';

function HeaderCard({ title, cases, total, color }) {
	return (
		<div className="headerCard">
			<Card className={`headerCard__main${color}`}>
				<CardContent>
					<Typography color="textPrimary" className="headerCard__title">{title}</Typography>
					<h2>{cases}</h2>
					<Typography color="textSecondary" className="headerCard__total"><strong>{total}</strong> in Total</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export default HeaderCard;
