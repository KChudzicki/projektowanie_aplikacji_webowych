let numericArry = [1,2,3];
let strinngArry = ['onr','two','three'];
let booleanArry = [true,true,false];
let mixArry = [1,'two',false];

console.log(numericArry);
console.log(strinngArry);
console.log(booleanArry);
console.log(mixArry);

console.log('--------------------');

let n = numericArry[0];
console.log(n)

console.log('--------------------');

numericArry[1] = 1000;
console.log(numericArry);

console.log('--------------------');

console.log(numericArry[3]);

console.log('--------------------');

console.log(numericArry.includes(4));
console.log(numericArry.includes(1));

console.log('--------------------');

numericArry.push(4);
console.log(numericArry);

console.log('--------------------');

console.log(typeof numericArry);
console.log(numericArry.length);