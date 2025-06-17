const removeFromArray = function(arr, ...elements) {
  const remove = Array.from(elements);
  const newArray = arr.filter(item => !remove.includes(item))
  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
