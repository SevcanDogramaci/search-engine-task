import { useState } from 'react';
import logo from '../../assets/images/logo.jpg';
import ResultsTable from '../components/ResultsTable';
import ValidatedSearchForm from '../components/ValidatedSearchForm';

import SearchService from '../../services/SearchService';

const LandingPage = () => {
	const [searchInfo, setSearchInfo] = useState({
		results: null,
		query: '',
	});
	const getSearchResults = ({ searchQuery }) => {
		setSearchInfo({ query: searchQuery, results: SearchService.getSearchResultsByPage(searchQuery, 1).data });
	};

	return (
		<div className="d-flex flex-column align-items-center mt-5">
			<img width="278px" height="115px" src={logo} alt="Logo" />
			<p id="app-name">Search web app</p>

			<div className="d-flex flex-column justify-content-center w-60 mt-3">
				<ValidatedSearchForm rules={{ required: true }} onSubmit={getSearchResults} />

				{searchInfo.results && (
					<div id="table-container">
						<ResultsTable data={searchInfo.results} dataQuery={searchInfo.query} isLimited />
					</div>
				)}
			</div>
		</div>
	);
};

export default LandingPage;
