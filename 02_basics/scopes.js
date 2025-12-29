var a = 20
const b = 30
let c = 5

{
    var a=10
    // b=6 // this will give error because we can't redefine const 
    let c=4
    console.log("a : ",a)
    console.log("b : ",b)
    console.log("c : ",c)
}

    console.log("a : ",a)
    console.log("b : ",b)
    console.log("c : ",c)



    function one(){
        const username = "priya"

        function two(){
            const website = "youtube"
            console.log(username)
        }
        // console.log(website) //this will give error because website is not decleared in this scope
        two()
    }

    one()


    //////different ways of storing function

    console.log(addOne(6)) // will not give any error

    function addOne(num){
        return num+1
    }
    console.log(addOne(5))



    console.log(addTwo(17)) //this will give an error because we have declared a function in form of variable as this initialized later

    const addTwo = function(num){
        return num+2
    }

    console.log(addTwo(21))