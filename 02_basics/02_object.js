// const tinderUser = new Object()
// const tinderUser = {

// }
// tinderUser.name = "Alpha"
// tinderUser.age = "19"
// console.log(tinderUser)

const regularUser = {
    username : {
        fullname : {
            firstname : "priya",
            lastname : "kumari"
        }
    }
}
console.log(regularUser.username)
console.log(regularUser.username?.fullname.firstname) //we put ? to check whether the value exist or not


const obj1 = { "a" : 1 , "b" : 2}
const obj2 = { "c" : 1 , "d" : 2}

// const obj3 = {obj1 , obj2} //it will make object within object 

// const obj3 = Object.assign(obj1,obj2) // all the other ojects will get stored in obj1 hence we will use an empty object firstly then put all the other objects in it
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

console.log(Object.keys(obj3)) // gives array of keys
console.log(Object.values(obj3)) // gives array of values
console.log(Object.entries(obj3)) // gives array of pair of keys and values

console.log(obj3.hasOwnProperty('d')) // states whether the key is present or not
