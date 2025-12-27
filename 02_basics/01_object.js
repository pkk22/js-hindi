// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Priya",  // object treats name as a string and we can put any value in it like name : 234 or name : "khushi"
    age : 18,
    // mySym : "Dugbu" , // mySym will be a string here not symbol
    [mySym] : "Dugbu", // this is the correct way to initialise symbol
    "full name" : "Raturaj",
    location : "home",
    email : "priya@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Friday"]
}

//how to access values of the object using keys

console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser[mySym])

JsUser.email = "khushi@gmail.com"
// Object.freeze(JsUser) // this will freeze all the values of the object JsUser and no changes will be accomodated

JsUser.email = "dillu@gmail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello JS user`);
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this is used to for reffering to the same object
}

console.log(JsUser.greeting)
console.log(JsUser.greeting())

console.log(JsUser.greetingTwo)
console.log(JsUser.greetingTwo())
