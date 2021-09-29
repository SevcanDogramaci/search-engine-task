import React from 'react';
import { Dropdown } from 'react-bootstrap';
import icon from '../../assets/images/sortIcon.png';

const OrderDropdown = ({ onDrop, activeOrder }) => {
	const { field, direction } = activeOrder;
	const onDropItemClicked = (event) => {
		const [clickedField, clickedDirection] = event.target.innerText.split(' ');
		onDrop(clickedField, clickedDirection);
	};

	const isActive = (buttonText) => field.concat(` ${direction}`) === buttonText;

	return (
		<div className="d-flex justify-content-end">
			<Dropdown drop="end">
				<Dropdown.Toggle variant="light">
					<img width="26px" height="24px" src={icon} alt="sort-icon" />
					Order By
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item as="button" active={isActive('Name Asc')} onClick={onDropItemClicked}>
						Name Asc
					</Dropdown.Item>
					<Dropdown.Item as="button" active={isActive('Name Desc')} onClick={onDropItemClicked}>
						Name Desc
					</Dropdown.Item>
					<Dropdown.Item as="button" active={isActive('Date Asc')} onClick={onDropItemClicked}>
						Date Asc
					</Dropdown.Item>
					<Dropdown.Item as="button" active={isActive('Date Desc')} onClick={onDropItemClicked}>
						Date Desc
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default OrderDropdown;
