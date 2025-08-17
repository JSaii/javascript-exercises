const fibonacci = function(n) {
    n = +n;
    if(n === 0){
        return 0;
    } else if (n === 1){
        return 1;
    } else if (n < 0){
        return "OOPS";
    }

    return fibonacci(n-1) + fibonacci(n-2);
};

// Do not edit below this line
module.exports = fibonacci;
