const palindromes = function (str) {
    const clean = str.toLowerCase().replace(/[.!,\s]/g, '');
    const array = clean.split('');
    const reverse = array.reverse();
    const join = reverse.join('');

    if (join === clean){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
