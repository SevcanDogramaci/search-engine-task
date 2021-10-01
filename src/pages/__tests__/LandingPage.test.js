import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

beforeEach(() => {
	render(<App />);
});

test('renders empty search bar', () => {
	const searchInput = screen.getByRole('textbox');
	const searchButton = screen.getByRole('button');

	expect(searchInput).toBeInTheDocument();
	expect(searchInput).toHaveValue('');
	expect(searchButton).toHaveTextContent('Search');
	expect(searchButton).not.toBeDisabled();
});

test('renders nonempty search bar', () => {
	const searchInput = screen.getByRole('textbox');
	const searchButton = screen.getByRole('button');

	userEvent.type(searchInput, 'se');
	expect(searchInput).toHaveValue('se');
	expect(searchButton).toHaveTextContent('Search');
	expect(searchButton).not.toBeDisabled();
});

test('shows error message when empty text searched', () => {});
test('shows initial results', () => {});
test('navigates to results page when show more clicked', () => {});