function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}

const result = addTwoNumbers(3,4)
console.log(result) //it will give output as undefined because we haven't returned any value in the function


function addNum(number1, number2){
    return number1+number2
}

const Result = addNum(5,6)
console.log("Result : ", Result)


function loginUserMsg(username){
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMsg("Priya"))
console.log(loginUserMsg()) // gives undefined as result because we are not returning anything only printing something


function loginUserMessage(username = "sam"){
    if(!username){                   // this if statement will never gets executed because if we don't give any input username will be sam
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Priya"))
console.log(loginUserMessage()) 

//for taking continuous arguments

function calculateCartPrice(...nums1){
    return nums1
}

console.log(calculateCartPrice(200,4000,500,600)) // will return an array

const user = {
    name : "khushi",
    class : 12
}

function obj(objname){
    return objname.class
}

console.log(obj(user))