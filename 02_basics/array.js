// sallow copy -> passed by reference;
// deep copy -> not passed by reference

// in array sallow copies are made

const myArr = [0,1,2,3,4,5]
console.log(myArr)

const myArr2 = new Array(1,2,3,5,6)

myArr.push(6)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(9) //adds element to starting of the array is not considered bcz it will shift the entire elemrnts of the array thus having high time complexity
console.log(myArr)

myArr.shift() // removes element from starting of the array
console.log(myArr)

console.log(myArr.includes(7))

const newArr = myArr.join() //converts array into string
console.log(typeof newArr)
console.log(newArr)

// differnce between slice and splice
// slice -> does not change the actual and will give elements till one index less than ending index
const myn1 = myArr.slice(1,3)
console.log(myArr)
console.log(myn1)

// splice -> changes the actual and will give elements till ending index
const myn2 = myArr.splice(1,3)
console.log(myArr); 
console.log(myn2)


//lec 2

const arr1 = ["a","b","c"]
const arr2 = ["A","B","C"]

// arr1.push(arr2); // a new element in the form of arr2 wil be added
// console.log(arr1)

arr1.concat(arr2)
console.log(arr1) // this will not add anything change in the array
const arr3 = arr1.concat(arr2)
console.log(arr3)

//merge two arrays using spread i.e. ... through this we can merge two or more arrays
const new_arr3 = [...arr1, ...arr2]
console.log(new_arr3)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("priya"))
console.log(Array.from("priya"))

console.log(Array.from({name: "priya"})) // will give empty array we need to specify which type of array we want i.e. array of keys or array of value

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))