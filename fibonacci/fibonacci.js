const fibonacci = function(n) {
    n = +n;
    let prev = 0;
    let next = 1;
    let nth = 0;
    if (n < 0) return "OOPS";
    for (let i = 0; i < n; ++i) {
        nth = prev + next;
        prev = next;
        next = nth;
    }
    return prev;
}

module.exports = fibonacci
