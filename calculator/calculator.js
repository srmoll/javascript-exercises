function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	let total = 0;
	const len = arr.length;
	for (let i = 0; i < len; ++i) {
		total += arr[i];
	}
	return total;
}

function multiply (arr) {
	let prod = 1;
	const len = arr.length;
	for (let i = 0; i < len; ++i) {
		prod *= arr[i];
	}
	return prod;
}

function power(a, b) {
	return a**b;
}

function factorial(base) {
	if (base <= 1) return 1;
	else {
		return base * factorial(base - 1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}