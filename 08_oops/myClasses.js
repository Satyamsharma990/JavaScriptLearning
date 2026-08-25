// class User {
    constructor(username, password, email)  {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    encrptPassword() {
        return `${this.password}abc`
    }

}

const user = new User("Satyam", "123", "123@email");

console.log(user.encrptPassword());
