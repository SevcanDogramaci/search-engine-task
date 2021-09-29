import React from 'react';
import { Button } from 'react-bootstrap';

const PaginationButton = (props) => {
	const { page, text, active, disabled, onClick } = props;
	const getButtonContent = () => {
		if (text) return text;
		return page;
	};

	return (
		<Button
			variant="outline-secondary"
			className="btn-pagination"
			active={active}
			disabled={disabled}
			onClick={() => onClick(page)}
		>
			{getButtonContent()}
		</Button>
	);
};

export default PaginationButton;
