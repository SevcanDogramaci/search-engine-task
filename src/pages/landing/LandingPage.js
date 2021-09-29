import { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import ResultsTable from '../components/ResultsTable';
import logo from '../../assets/images/logo.jpg';

import SearchService from '../../services/SearchService';

const LandingPage = () => {
	const [searchResults, setSearchResults] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	const getSearchResults = () => {
		setSearchResults(SearchService.getSearchResultsByPage(searchQuery, 1).data);
	};

	return (
		<div className="d-flex flex-column align-items-center mt-5">
			<img width="278px" height="115px" src={logo} alt="Logo" />

			<div className="d-flex justify-content-center w-60 mt-5">
				<div className="d-flex flex-column w-100">
					<FormControl
						placeholder="Enter to search"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>

					{searchResults && (
						<div id="table-container">
							<ResultsTable data={searchResults} dataQuery={searchQuery} isLimited />
						</div>
					)}
				</div>
				<Button variant="primary" disabled={searchQuery.trim().length === 0} onClick={getSearchResults}>
					Search
				</Button>
			</div>
		</div>
	);
};

export default LandingPage;
