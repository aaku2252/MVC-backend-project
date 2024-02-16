import UserModel from "../models/user_model.js";

export default class userController {
    getRegister(req, res) {
        res.render("registration.ejs");
    }
    getLogin(req, res) {
        res.render("login.ejs", { errorMessage: null });
    }
    postRegister(req, res) {
        const { name, email, password } = req.body;
        UserModel.add(name, email, password);

        res.redirect("/login");
    }
    userLogin(req, res) {
        const { email, password } = req.body;
        if (UserModel.loginUser(email, password)) {
            req.session.userEmail = email;
            res.redirect("/");
        } else {
            res.render("login.ejs", {
                errorMessage: "Your credentials are incorrect.",
            });
        }
    }
}
