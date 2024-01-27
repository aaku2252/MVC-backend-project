import { body, validationResult } from "express-validator";

const validateRequest = async (req, res, next) => {
    //validate data
    // const { name, price, imageUrl } = req.body;
    // const errors = [];
    // if (!name || name.trim() == "") {
    //     errors.push("Name is required.");
    // }
    // if (!price || parseFloat(price) < 1) {
    //     errors.push("Price must be a positive value.");
    // }
    // try {
    //     //If the url is invalid, then it throws an TypeError
    //     const validUrl = new URL(imageUrl);
    // } catch (err) {
    //     errors.push("Image URL is invalid");
    // }

    //validate data using express validator

    //1. setup rules for validations
    const rules = [
        body("name").notEmpty().withMessage("Name is required."),
        body("price")
            .isFloat({ gt: 0 })
            .withMessage("Price should be a positive value."),
        body("imageUrl")
            .isURL()
            .withMessage("Image URL should be a valid URL."),
    ];
    //2. run those rules

    await Promise.all(rules.map((rule) => rule.run(req)));

    //3. Check if there rare any errors after running the rules
    let errors = validationResult(req);

    //4. If there are any errors return error  messages
    if (!errors.isEmpty()) {
        return res.render("new-product", {
            errorMessage: errors.array()[0].msg,
        });
    }
    next();
};

export default validateRequest;
