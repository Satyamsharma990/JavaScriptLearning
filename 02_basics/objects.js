//Singleton

//object literal 
const mySym = Symbol("key1");

const jUser = {
    "FullName" : "Satyam Kumar",
    name: "Satyam",
    age: 19,
    location: "Patna",
    isLoggedIn: false,
    [mySym] : "mySym",
    last: ["Satyam", "Shivam"]
}


jUser.isLoggedIn;

jUser["email"]; 

// console.log(jUser.FullName);
// console.log(typeof mySym);

jUser.email = "Satyam@123"
// Object.freeze(jUser); 

jUser.email = "Satyam";
// console.log(jUser);

// Function 

jUser.greeting = function() {
    console.log(`Hello js, ${this.name}}`); // thsi is used to get the data in same object 
}

// console.log(jUser.greeting); // function anonymous, Not executed just a refrence.

// console.log(jUser.greeting()); 

// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Satyam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname: {
            firstname: "Satyam",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// optinal chaining user fullname? to add a layer of safety like if fullname is not exist it cam return null not crash the application

const obj1 =  {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2}
// const obj3= Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(Object.hasOwnProperty('name'));

// Third Part

const course = {
    courseName: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

// course.courseInstructor; // one syyntx

const { courseInstructor: instructor } = course;

console.log(instructor);

