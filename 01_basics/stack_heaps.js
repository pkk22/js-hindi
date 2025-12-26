// Stack (Primitive) , Heap (Non-Primitive)

let score = 100
let scoreValue = score
scoreValue = 200;

console.log(score)
console.log(scoreValue);

let user={
    email: "himynameis@gmail.com",
    upi : "user@ybl"
}

let userTwo= user

console.log(user.upi)
console.log(userTwo.upi)

userTwo.upi="userTwo@ybl"

console.log(user.upi)
console.log(userTwo.upi)
