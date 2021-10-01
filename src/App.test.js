import { render, screen } from '@testing-library/react';
import App from './App';

test('navigates to landing page', () => {
	render(<App />);

	const appName = screen.getByText('Search web app');
	expect(appName).toBeInTheDocument();
});