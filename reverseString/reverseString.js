const reverseString = function(str) {
	let arr = str.split('');
	arr.reverse();
	return arr.join('');
}

module.exports = reverseString
