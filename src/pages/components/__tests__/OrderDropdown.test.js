import { render } from '@testing-library/react';
import OrderDropdown from '../OrderDropdown';

test('renders dropdown', () => {
	const props = {
		activeOrder: {
			field: 'Name',
			direction: 'Desc',
		},
	};
	render(<OrderDropdown activeOrder={props.activeOrder} />);
});

test('changes active order', () => {});
