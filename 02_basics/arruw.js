const user = {
    username: "Satyam",
    price: 199,

    welcomeMessage: function() {
        console.log(`Hello ${this.username}`);
    }
}


user.welcomeMessage();
user.username = "sam"

user.welcomeMessage();