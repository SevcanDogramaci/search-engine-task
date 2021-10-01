import { render, screen } from '@testing-library/react';
import PaginationButton from '../PaginationButton';

test('renders pagination button with text', () => {
	render(<PaginationButton text="..." />);

	const paginationButton = screen.getByRole('button');
	expect(paginationButton).toHaveTextContent('...');
});

test('renders pagination button with page number', () => {
	render(<PaginationButton page={1} />);

	const paginationButton = screen.getByRole('button');
	expect(paginationButton).toHaveTextContent(1);
});

test('renders disabled pagination button', () => {
	render(<PaginationButton page={1} disabled />);

	const paginationButton = screen.getByRole('button');
	expect(paginationButton).toHaveTextContent(1);
    expect(paginationButton).toBeDisabled();
});

test('pagination button clicks', () => {});
