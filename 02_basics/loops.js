// for of loop (gives values)

const nums = [1,2,3,4]

for(const num of nums){
    console.log(num);
}

user = {
    username : "Khushi",
    price : 990,
    place : "home"
}

//Maps (contians unique values)

const map = new Map()
map.set('IN','INDIA')
map.set('USA','UNITED STATES OF AMERICA')
map.set('Fr','France')

console.log(map)

//syntax of map for 'for of' loop

for(const [key,value] of map){
    console.log(key, ':-' ,value)
}

//syntax of object for 'for of' loop

// for(const [key,value] of user){
//     console.log(`The ${key} is ${value}`)
// }

//this will give error because objects can't be iterated using 'for of' loop




//for in (gives index or key)

//this can be used for iterating objects
for(const key in user){
    console.log(`The ${key} is ${user[key]}`)
}

//can also be used in array
const programming = ["js","rb","py","java"]
for(const key in programming){
    // console.log(key) //this will print 0,1,..
    console.log(programming[key])
}

//can't be used in maps as they are not iterable




//for Each (take callback function inside it hence the function has no name)
const coding = ["js","rb","py","java"]

coding.forEach(function (val){
    console.log(val) //this will automatically take all the values of array
})

//using arrow function

coding.forEach((item)=>{
    console.log(item)
})

//make a function and pass its refernce in forEach
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

//forEach also takes parameter of key , value as well as array
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

