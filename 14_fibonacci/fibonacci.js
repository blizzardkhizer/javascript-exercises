const fibonacci = function(a) {
    let count;
    if (!(typeof a === "number")) {
        count = parseInt(a);
    }
    else {
        count = a;
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;
    if (count == 1) return 1;
    if (count == 2) return 1;

    let first = 1;
    let second = 1;

    for (let i = 3; i <= count; i++) {
        let temp = first;
        first = second;
        second = temp + second;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
