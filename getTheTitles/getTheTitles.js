const getTheTitles = function (bookArray) {
	const titles = bookArray.map(book => book.title);
	return titles;
}

module.exports = getTheTitles;
