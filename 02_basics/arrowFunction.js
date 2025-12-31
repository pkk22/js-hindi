user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "Priya";
user.welcomeMessage();

console.log(this) /*for node environment this will give output {} bcz there is no global contextbut
for browser this will give output window bcz for browser global object is window */

function chai(){
    console.log(this);
}

chai()

const Code = function(obj){
    let name = "priya";
    console.log(obj.username)
    console.log(this.username); // this will give undefined as result 
    console.log(this.name); // this will print undefined bcz u can't use 'this' for variable it is used for object
}
Code(user);


//Arrow Function

//we can't use 'this' in arrow function

const Chai = () => {
    let username = "priya"
    console.log(this); //this will give {} as output
    console.log(username); 
}
Chai();

//Ways of writing arrowFunction

//Way 1 : 
// const addTwo = (num1,num2) => {
//     return num1+num2;
// }

// console.log(addTwo(3,4))

//Way 2 :

// const addTwo = (num1,num2) => (num1+num2)
// or 
// const addTwo = (num1,num2) => {return num1+num2}

////how to return object
// const addTwo = (num1,num2) => ({username:"hitesh"})
