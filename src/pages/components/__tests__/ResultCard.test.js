import { render, screen } from '@testing-library/react';
import ResultCard from '../ResultCard';
import SINGLE_TEST_DATA from '../../../assets/data/testData';

test('renders card content', () => {
	render(<ResultCard result={SINGLE_TEST_DATA} />);

	const countryCitySpan = screen.getByTestId('country-city');
	const emailSpan = screen.getByTestId('email');
	const nameSurnameSpan = screen.getByTestId('name-surname');

	expect(countryCitySpan).toHaveTextContent(new RegExp(`${SINGLE_TEST_DATA[4]}`));
	expect(countryCitySpan).toHaveTextContent(new RegExp(`${SINGLE_TEST_DATA[5]}`));
	expect(emailSpan).toHaveTextContent(new RegExp(`${SINGLE_TEST_DATA[2]}`));
	expect(nameSurnameSpan).toHaveTextContent(new RegExp(`${SINGLE_TEST_DATA[0]}`));
});