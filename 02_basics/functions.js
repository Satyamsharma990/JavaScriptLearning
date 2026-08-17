function sayMyName() {
    console.log("S");
}

// sayMyName; // refrence


// sayMyName(); // execution

function addTwoNumbers(num1, num2) {
    
    return num1 + num2;
}

// const res = addTwoNumbers(1, "a")
// console.log(res);

function loginUserMessage(username = "sam") {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

const msg = loginUserMessage();
// console.log(msg);
// if nothing passed means undefined

function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(100,200,2000));

const user = {
    name: "satyam",
    price: 199
}

function handleObject(AnyObject) {
    console.log(`The name of customer is ${AnyObject.name} and amount of the product is ${AnyObject.price}`);
}

// handleObject(user);

const arr = [1, 2, 3];

function handleArrya(getArray) {
    return getArray[2];
}

console.log(handleArrya(arr));






