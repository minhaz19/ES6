const array1 = [5,7,8,33];
const array2 = [22,33,566,434];
const fullArray = [...array1,...array2];
// console.log(fullArray);

const maxValue = Math.max(...array1,...array2);
console.log(maxValue);
