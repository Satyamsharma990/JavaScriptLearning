class User {
    constructor (username, password) {
        this.username = username
        this.password = password
    }

    get username() {
        return `${this._username}abs`;
    }

    set username(value) {
        this._username = value.toUpperCase();
    }
}

const satyam = new User("Satyam", "ABsss");
console.log(satyam.username);