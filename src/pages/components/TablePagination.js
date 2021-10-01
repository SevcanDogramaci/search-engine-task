import React from 'react';
import PaginationButton from './PaginationButton';

const EDGE_PAGE_COUNT = 3;
const MIN_PAGE_COUNT_WITHOUT_EDGES = 7;

const TablePagination = ({ currentPage, totalPage, onPage }) => {
	const getPageButtons = () => {
		const pages = [];

		if (totalPage > MIN_PAGE_COUNT_WITHOUT_EDGES) {
			for (let i = 0; i < EDGE_PAGE_COUNT; i += 1)
				pages.push(
					<PaginationButton key={i + 1} page={i + 1} active={currentPage === i + 1} onClick={onPage} />
				);

			if (currentPage > EDGE_PAGE_COUNT && currentPage < MIN_PAGE_COUNT_WITHOUT_EDGES) {
				pages.push(<PaginationButton key="start-ellipsis" text="..." />);
				pages.push(<PaginationButton key={currentPage} page={currentPage} active onClick={onPage} />);
			}
			pages.push(<PaginationButton key="end-ellipsis" text="..." />);

			for (let i = EDGE_PAGE_COUNT - 1; i >= 0; i -= 1)
				pages.push(
					<PaginationButton
						key={totalPage - i}
						page={totalPage - i}
						active={currentPage === totalPage - i}
						onClick={onPage}
					/>
				);
		} else {
			for (let i = 1; i <= totalPage; i += 1)
				pages.push(<PaginationButton key={i} page={i} active={currentPage === i} onClick={onPage} />);
		}

		return pages;
	};

	return (
		<div className="d-flex justify-content-center w-100">
			<PaginationButton
				key="prev"
				text="Previous"
				page={currentPage - 1}
				disabled={currentPage === 1}
				onClick={onPage}
			/>
			{getPageButtons()}
			<PaginationButton
				key="next"
				text="Next"
				page={currentPage + 1}
				disabled={currentPage === totalPage}
				onClick={onPage}
			/>
		</div>
	);
};

export default TablePagination;
