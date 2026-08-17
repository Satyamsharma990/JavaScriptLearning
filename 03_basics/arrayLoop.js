const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(const num of arr) {
//     console.log(num);
// }

const s = "Satyam";

// for(const char of s){
//     console.log(char);   
// }

const map = new Map();

map.set("In", "India");
map.set("Us", "United States");
map.set("Au", "Australia");

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, value);
// }

const myObject = {
    js: 'Javascript',
    py: 'Python',
    rb: 'Ruby',
    go: 'Golang'
}

// for (const key in myObject) {
//     console.log(myObject[key]);
// }

// arr.forEach(function (item) {
//     console.log(item);
// })

// arr.forEach((item) => {
//     let a = item * item;
//     console.log(a);
// })

const printMe = (item) => {
    console.log(item);
    console.log('inside function');
}

// arr.forEach(printMe);

// arr.forEach((item, index, arr)=>{
//     console.log(item, index, arr);    
// })

const myCoding = [
    {
        languageName: "javaScript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "Java"
    },
    {
        languageName: "Python",
        languageFile: "py"
    }
]

// myCoding.forEach( (item) => {
//     // console.log(item.languageFile, + " " ,item.languageName);
//     console.log(item.languageFile, " " ,item.languageName);
// } )

const mynums = arr.filter((nums) => nums > 4 )

// console.log(mynums);


const books = [
    { title: "Book One", genre: "Fiction", publish: 1992, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1993, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1994, edition: 2010 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1995, edition: 2014 },
    { title: "Book Five", genre: "Sci-Fi", publish: 1996, edition: 2018 },
    { title: "Book Six", genre: "Fiction", publish: 1997, edition: 1999}
]

const userbooks = books.filter((bk) => bk.genre === "Fiction");
// console.log(userbooks);

const newArr = arr.map((num) => num * 2);

// console.log(newArr);

const nums = [1, 2, 3];

const sum = nums.reduce((acc, curr) => {
    console.log(`acc: ${acc} and curr: $(curr)`);
    return acc + curr;
}, 0)

console.log(sum);



