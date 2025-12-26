const score = new Number(400)

console.log(score);
console.log(score.toString().length);

console.log(typeof score);
console.log(score.toFixed(3))

const otherNumber = 23.889

console.log(otherNumber.toPrecision(3))
console.log(otherNumber.toPrecision(2))
console.log(otherNumber.toPrecision(1))

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))

console.log(Math.random()) //gives any random value between 0 and 1
console.log((Math.random()*10)+1) // gives value between 1 and 9

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)) + 10);




