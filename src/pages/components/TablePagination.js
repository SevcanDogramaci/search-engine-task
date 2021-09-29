import React from 'react';
import PaginationButton from './PaginationButton';

const TablePagination = ({ currentPage, totalPage, onPage }) => {
	const getPageButtons = () => {
		const pages = [];

		if (totalPage > 7) {
			for (let i = 0; i < 3; i += 1)
				pages.push(<PaginationButton page={i + 1} active={currentPage === i + 1} onClick={onPage} />);

			if (currentPage > 3 && currentPage < 7) {
				pages.push(<PaginationButton text="..." />);
				pages.push(<PaginationButton page={currentPage} active onClick={onPage} />);
			}
			pages.push(<PaginationButton text="..." />);

			for (let i = 2; i >= 0; i -= 1)
				pages.push(
					<PaginationButton page={totalPage - i} active={currentPage === totalPage - i} onClick={onPage} />
				);
		} else {
			for (let i = 1; i < totalPage; i += 1)
				pages.push(<PaginationButton page={i} active={currentPage === i} onClick={onPage} />);
		}

		return pages;
	};

	return (
		<div className="d-flex justify-content-center w-100">
			<PaginationButton text="Previous" page={currentPage - 1} disabled={currentPage === 1} onClick={onPage} />
			{getPageButtons()}
			<PaginationButton
				text="Next"
				page={currentPage + 1}
				disabled={currentPage === totalPage}
				onClick={onPage}
			/>
		</div>
	);
};

export default TablePagination;
