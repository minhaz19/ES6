// function doubleIt(num){
//     return num *2;

// }

// const doubleIt = function(num){
//     return num *2;
// }
const doubleIt = num =>num *2;

const MultipleIt = (num1,num2,num3) =>{
    const mul = num1* num2 * num3;
    return mul;
}

const showJustNumber = () => 5;

const result = doubleIt(6);
const multi = MultipleIt(2,4,6);
const showNumber = showJustNumber();
console.log(showNumber);
console.log(result);
console.log(multi);


 