//Immedialtely Invoked Function Evoked
// it is used to immedialtely call a function and 
// to prevent the function from the global pollution

function chai(){
    console.log(`DB CONNECTED`);
}
chai();

///what if we have to immediately call a function

// syntax of iife : ()()
(function Chai(){
    console.log(`DB CONNECTED`);
})(); //; is necessary because iife don't know were to stop hence ';' is used to mark the end


//calling iife in form of arrow function
( ()=>{
    console.log(`DB CONNECTED TWO`)
} ) ();

//how to give parameter and pass arguments in iife

((name)=>{
    console.log(name);
})("Priya");

