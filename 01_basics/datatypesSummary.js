// # Primitive data types (passed by value)

// 7 types
// String , Number , Boolean , null (means empty e.g. tempratur=null means that no temprature is alloted)
// undefined , symbol(used to make any value unique) 
// BigInt


// even if we pass same string or number in symbol it will make two unqiue things
const id = Symbol('123')
const anotherId = Symbol('123')
// id and anotherId are not equal
console.log(id===anotherId)


const outsideTemperature = null

const bigNumber = 2453876456267562628n;

// # Reference type (passed by reference)

// Array , object , functions

const bday = [6,21,22,23] //array

let myObj={
    name: "Priya",
    age: 17,
}

const myFunction= function(){
    console.log("Hello World")
}

// for knowing data type of any variable or const

console.log(typeof bigNumber);
console.log(typeof outsideTemperature); //null is an object

let Hello
console.log(Hello);
console.log(typeof Hello);

// type of all non primitive datatype is object


