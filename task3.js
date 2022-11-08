let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];
let n3 = 3;
let n5 = 5;
let n60 = 60;
let n90 = 90;

n3 = someNumbers.some(n => n % 3 === 0);
n5 = someNumbers.some(n => n % 5 === 0);
n60 = someNumbers.some(n => n % 60 === 0);
n90 = someNumbers.some(n => n % 90 === 0);

console.log(n3);
console.log(n5);
console.log(n60);
console.log(n90);