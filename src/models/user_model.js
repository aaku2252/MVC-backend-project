export default class UserModel {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static add(name, email, password) {
        const newUser = new UserModel(users.length + 1, name, email, password);
        users.push(newUser);
    }
    static loginUser(email, password) {
        const approved = users.find(
            (user) => user.email == email && user.password == password
        );

        if (approved) {
            return true;
        } else {
            return false;
        }
    }
}
const users = [];
