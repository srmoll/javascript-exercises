const palindromes = function(str) { 
    let newStr = str.replace(/\W/ig, '').toLowerCase();
    let reversedStr = newStr.split('').reverse().join('');
    return (reversedStr === newStr);
};

module.exports = palindromes
