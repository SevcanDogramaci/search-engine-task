import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

beforeEach(() => {
	window.history.pushState({}, 'Test page', '/results');
	render(<App />);
});

test('renders empty search bar', () => {
	const searchInput = screen.getByRole('textbox');
	const searchButton = screen.getByText('Search');

	expect(searchInput).toBeInTheDocument();
	expect(searchInput).toHaveValue('');
	expect(searchButton).toHaveTextContent('Search');
});

test('renders nonempty search bar', () => {
	const searchInput = screen.getByRole('textbox');

	userEvent.type(searchInput, 'se');
	expect(searchInput).toHaveValue('se');
});

test('renders no results', () => {});
test('renders first page when a text searched', () => {});
test('shows error message when empty text searched', () => {});
test('goes to previous page', () => {});
test('goes to next page', () => {});
test('goes to a clicked page', () => {});
test('orders by name asc', () => {});
test('orders by date asc', () => {});
test('orders by name desc', () => {});
test('orders by date desc', () => {});
