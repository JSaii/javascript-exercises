const findTheOldest = function(arr) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const oldest = arr.reduce((acc, cur) => {
        if(!("yearOfDeath" in cur)){
            cur.age = currentYear - cur.yearOfBirth;
        } else {
            cur.age = cur.yearOfDeath - cur.yearOfBirth;
        }
        
        if(cur.age > acc.age){
            return cur;
        } else {
            return acc;
        }
    }, {age:0})
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
