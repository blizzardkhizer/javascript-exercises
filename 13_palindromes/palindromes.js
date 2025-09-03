const palindromes = function (string) {
    let arr = string.split('');

    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] == arr[arr.length - 1 - i])) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
