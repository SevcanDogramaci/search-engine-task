const RESULT_PER_PAGE = 10;

const mockData = require('../assets/data/mockData.json');

function compareTexts(a, b, index, direction) {
	if (direction === 'desc') return b[index].localeCompare(a[index]);
	return a[index].localeCompare(b[index]);
}

function compareDates(a, b, index, direction) {
	// reverse date string to compare by starting from year
	const aReverse = a[index].split('').reverse().join('');
	const bReverse = b[index].split('').reverse().join('');
	if (direction === 'desc') return bReverse.localeCompare(aReverse);
	return aReverse.localeCompare(bReverse);
}

export default class SearchService {
	static data = mockData.data;

	static dataCols = mockData.cols;

	static filterData(query) {
		const index = SearchService.dataCols.indexOf('Name Surname');
		return SearchService.data.filter((singleData) => singleData[index].includes(query));
	}

	static sortData(data, { field, direction }) {
		let index;
		const dataCopy = [...data];

		switch (field.toLowerCase()) {
			case 'date':
				index = SearchService.dataCols.indexOf('Date');
				dataCopy.sort((a, b) => {
					return compareDates(a, b, index, direction.toLowerCase());
				});
				break;
			default:
				index = SearchService.dataCols.indexOf('Name Surname');
				dataCopy.sort((a, b) => {
					return compareTexts(a, b, index, direction.toLowerCase());
				});
		}

		return dataCopy;
	}

	static getSearchResultsByPage(
		searchQuery = '',
		pageNo = 1,
		sortConfig = {
			field: 'name',
			direction: 'asc',
		}
	) {
		const parsedPageNo = parseInt(pageNo, 10);
		const filteredData = this.sortData(this.filterData(searchQuery), sortConfig);

		const totalPage =
			Math.floor(filteredData.length / RESULT_PER_PAGE) + (filteredData.length % RESULT_PER_PAGE > 0 ? 1 : 0);
		const pageStart = (parsedPageNo - 1) * RESULT_PER_PAGE;

		let pageEnd;
		if (pageStart + RESULT_PER_PAGE >= filteredData.length) pageEnd = filteredData.length;
		else pageEnd = pageStart + RESULT_PER_PAGE;

		return {
			dataQuery: searchQuery,
			data: filteredData.slice(pageStart, pageEnd),
			currentPage: parsedPageNo,
			totalPage,
		};
	}
}
