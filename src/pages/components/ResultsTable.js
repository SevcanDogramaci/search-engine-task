import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import ResultCard from './ResultCard';
import TablePagination from './TablePagination';

const hasMoreData = (data, totalPage) => data.length > 3 || totalPage > 1;

const ResultsTable = (props) => {
	const { data, dataQuery, isLimited, onPage, currentPage, totalPage } = props;

	const getData = () => {
		if (isLimited) return data.slice(0, 3);
		return data;
	};

	const getTableContent = () => {
		return getData().map((result) => (
			<tr>
				<ResultCard result={result} />
			</tr>
		));
	};

	if (!data) return <></>;
	if (data.length === 0) return <>No results</>;

	return (
		<>
			{/* {!isLimited && <OrderDropdown />} */}

			<Table hover bordered>
				<tbody>{getTableContent()}</tbody>
			</Table>

			{isLimited && hasMoreData(data, totalPage) && (
				<Link id="redirect-link" to={`/results?query=${dataQuery}&page=1`}>
					Show more...
				</Link>
			)}
			{!isLimited && hasMoreData(data, totalPage) && (
				<TablePagination currentPage={currentPage} totalPage={totalPage} onPage={onPage} />
			)}
		</>
	);
};

export default ResultsTable;
