let findTheOldest = function(arr) {
    
    if (!('yearOfDeath' in arr[0])) {
        arr[0]['yearOfDeath'] = new Date().getFullYear();
    }
    let first = (arr[0].yearOfDeath - arr[0].yearOfBirth);
    let eldestIndex = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (!('yearOfDeath' in arr[i])) {
            arr[i]['yearOfDeath'] = new Date().getFullYear();
        }
        let next = (arr[i].yearOfDeath - arr[i].yearOfBirth);
        if (next > first) {
            first = next;
            eldestIndex = i;
        }
    }
    return arr[eldestIndex];
}

module.exports = findTheOldest
