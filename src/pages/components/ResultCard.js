import React from 'react';

const ResultCard = ({ result }) => {
	return (
		<div className="d-flex flex-column justify-content-center">
			<div className="d-flex flex-row justify-content-between align-items-start">
				<span data-testid="country-city">
					{result[4]} - {result[5]}
				</span>
				<span data-testid="email">Email: {result[2]}</span>
			</div>
			<span id="name" data-testid="name-surname">
				{result[0]} - {result[3].split('/')[2]}
			</span>
		</div>
	);
};

export default ResultCard;
