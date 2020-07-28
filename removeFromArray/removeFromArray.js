const removeFromArray = function() {
	let ogArr = arguments[0];
	for (let i = 1; i < arguments.length; ++i) {
		let index = ogArr.indexOf(arguments[i]);
		if (index > -1) {
			ogArr.splice(index, 1);	
		}
	}
	return ogArr;	
}

module.exports = removeFromArray
