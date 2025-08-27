const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 1 || b < 1) return "ERROR";
    if (a > b) {
        [a, b] = [b, a];
    }
    let sum = a;
    for (let i = a + 1; i <= b; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
