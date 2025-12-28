// destructuring 

const course = {
    courseName : "javaScript",
    price : 999,
    courseInstructor : "Hitesh"
}

const {courseInstructor : instructor} = course
console.log(instructor)