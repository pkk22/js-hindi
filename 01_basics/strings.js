
const name = "Priya"
const age = 18

console.log(`Hello my name is ${name} and my age is ${age}`)

const myName = new String('Piirrriiiyaaa')

console.log(myName[0]);
console.log(myName.__proto__);

console.log(myName.charAt(2));
console.log(myName.indexOf('i'))
console.log(myName.length);

const newString = myName.substring(0,4) // even if we put negative value in the starting position it will still start from zero
console.log(newString);

const anotherString = myName.slice(-12,4) // if it starts from negative value it will start from end
console.log(anotherString)

const newStr = "    priya   "
console.log(newStr.trim());  // trims the spaces inside the string

const url = "https://priya.com/priya%22kumari"

console.log(url.replace('%22','-'))
console.log(url.includes('hitesh'))

const gameName = 'i-am-priya-kumari'
console.log(gameName.split('-'))


