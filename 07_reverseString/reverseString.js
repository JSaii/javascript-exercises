const reverseString = function(string) {
    const split = string.split('');
    const reversed = [];
    for(let i = split.length-1;i >= 0;i--){
        reversed.push(split[i]);
    }
    const newString = reversed.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
