// Array

const myArr = [0, 1, 2, 3, 4];
// console.log(myArr[0]);

const myArr2 = new Array(1,2 , 3);
// console.log(myArr2);

// console.log(myArr.push(9));
// console.log(myArr.pop());

// myArr.unshift(-1);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.slice(1, 3));
// console.log(myArr);


// console.log(myArr.splice(1, 3));
// console.log(myArr);


const marvel_heroes = ["ironMan", "spiderMan", "thor"];

const dc_heroes = ["SuperMan", "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);

// console.log(marvel_heroes.concat(dc_heroes));

//spread operator
const newHeroes = [...marvel_heroes, ...dc_heroes];
// console.log(newHeroes);


const newArray = [1, 2, [1,2,3], 4, [3, 4, [2, 3]]];
// console.log(newArray);


// console.log(newArray.flat(3));

console.log(Array.isArray(newArray));
console.log(Array.from("satyam"));

console.log(Array.of(newArray, marvel_heroes));






