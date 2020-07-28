

const caesar = function(str, numShifts) {
    // 97 - 122 lowercase
    // 65 - 90 uppercase
    const regex = '^[A-Za-z]';
    let newStr = '';
    //reduce size of shift for easier calculations
    if (numShifts > 25 || numShifts < -25) {
        numShifts %= 26; // length of alphabet 
    }

    for (let i = 0; i < str.length; ++i) {
        let res = '';
        if (!str[i].match(regex)) {
            res = str[i];
        }
        else {
            let index = str[i].charCodeAt();
            if ((index + numShifts > 90) && index >= 65 && index <= 90) { // wrap around uppercase
                index = 64 + ((index + numShifts) - 90);
            }
            else if ((index + numShifts < 65) && index >= 65 && index <= 90) { 
                index = 90 - (64 - (index + numShifts));
            }
            else if ((index + numShifts > 122) && index >= 97 && index <= 122) { // wrap around lowercase
                index = 96 + ((index + numShifts) - 122);
            }
            else if ((index + numShifts < 97) && index >= 97 && index <= 122) { 
                index = 122 - (96 - (index + numShifts)); 
            }
            else {
                index += numShifts;
            }
            let shiftedChar = String.fromCharCode(index);
            let newChar = str[i].replace(str[i], shiftedChar);
            res = newChar;
        }
        newStr = newStr.concat(res);
    }
    return newStr;
}
module.exports = caesar
