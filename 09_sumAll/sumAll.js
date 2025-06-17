function checkInput(n){
    return n >= 0 && n % 1 === 0 && typeof(n) === "number"
}

const sumAll = function(a, b) {
    if(!checkInput(a) || !checkInput(b)){return "ERROR"};
    const [firstNum, secondNum] = a < b ? [a,b] : [b,a]

    let sum = 0;
    for(i = firstNum;i<=secondNum;i++){
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
