const sumAll = function(num1, num2) {
	if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR'; 
	if (num1 < 0 || num2 < 0) return 'ERROR';
	let temp = num1;
	if (num1 > num2) {
		num1 = num2;
		num2 = temp;
	}
	let count = 0;
	for (let i = num1; i <= num2; ++i) {
		count += i;
	}
	return count;
}

module.exports = sumAll
