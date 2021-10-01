/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import ResultCard from './ResultCard';
import TablePagination from './TablePagination';

const DATA_LIMIT = 3;
const hasMoreData = (data, totalPage = 1) => data.length > DATA_LIMIT || totalPage > 1;

const ResultsTable = (props) => {
	const { data, dataQuery, isLimited, onPage, currentPage, totalPage } = props;

	const getData = () => {
		if (isLimited) return data.slice(0, DATA_LIMIT);
		return data;
	};

	const getTableContent = () => {
		return getData().map((result, id) => (
			<tr key={id}>
				<td>
					<ResultCard result={result} />
				</td>
			</tr>
		));
	};

	if (!data) return <></>;
	if (data.length === 0) return <>No results</>;

	return (
		<>
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
