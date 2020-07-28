const ftoc = function(temp) {
	let celcius = (temp - 32) * (5/9);
	let newCelcius = Math.round(celcius * 10)/ 10;
	return newCelcius;
}

const ctof = function(temp) {
	let f = temp * (9/5) + 32;
	let newF = Math.round(f * 10) / 10;
	return newF;
}

module.exports = {
  ftoc,
  ctof
}
