import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import QueryString from 'qs';
import logo from '../../assets/images/logo.jpg';
import SearchService from '../../services/SearchService';
import OrderDropdown from '../components/OrderDropdown';
import ResultsTable from '../components/ResultsTable';
import ValidatedSearchForm from '../components/ValidatedSearchForm';

function ResultsPage({ location }) {
	const history = useHistory();
	const [resultsInfo, setResultsInfo] = useState({
		query: '',
		orderConfig: {
			field: 'Name',
			direction: 'Asc',
		},
		results: null,
		currentPage: 0,
		totalPage: 0,
	});

	const getSearchResults = (pageNo, searchQuery = resultsInfo.query) => {
		history.push(`/results?query=${searchQuery}&page=${pageNo}`);
	};

	const setOrderConfig = (field, direction) => {
		const { currentPage, totalPage, data } = SearchService.getSearchResultsByPage(
			resultsInfo.query,
			resultsInfo.currentPage,
			{
				field,
				direction,
			}
		);
		setResultsInfo({ ...resultsInfo, currentPage, totalPage, results: data, orderConfig: { field, direction } });
	};

	useEffect(() => {
		if (location.pathname === '/results') {
			const { query, page } = QueryString.parse(location.search, { ignoreQueryPrefix: true });
			const { dataQuery, currentPage, totalPage, data } = SearchService.getSearchResultsByPage(
				query,
				page,
				resultsInfo.orderConfig
			);
			setResultsInfo({ ...resultsInfo, query: dataQuery, currentPage, totalPage, results: data });
		}
	}, [location]);

	return (
		<div className="d-flex flex-column mt-4 ms-5">
			<div className="d-flex align-items-center w-75">
				<img width="149px" height="63px" src={logo} alt="Logo" />
				<ValidatedSearchForm
					id="search-bar"
					defaultValue={resultsInfo.query}
					rules={{ required: { value: true } }}
					onSubmit={({ searchQuery }) => getSearchResults(resultsInfo.currentPage, searchQuery)}
				/>
			</div>

			{resultsInfo.results && (
				<div id="res-table" className="d-flex flex-column w-60 mt-4 mb-5">
					<OrderDropdown activeOrder={resultsInfo.orderConfig} onDrop={setOrderConfig} />
					<ResultsTable
						data={resultsInfo.results}
						currentPage={resultsInfo.currentPage}
						totalPage={resultsInfo.totalPage}
						onPage={getSearchResults}
					/>
				</div>
			)}
		</div>
	);
}

export default ResultsPage;
