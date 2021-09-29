import React from 'react';

const ResultCard = ({ result }) => {
	return (
		<div className="d-flex flex-column justify-content-center">
			<div className="d-flex flex-row justify-content-between align-items-start">
				<span>
					{result[4]} - {result[5]}
				</span>
				<span>Email: {result[2]}</span>
			</div>
			<span id="name">
				{result[0]} - {result[3].split('/')[2]}
			</span>
		</div>
	);
};

export default ResultCard;
