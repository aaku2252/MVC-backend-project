import { body, validationResult } from "express-validator";
//express-validator is a package to handle validation

const validateRequest = async (req, res, next) => {
    console.log(req.body);

    //validate data using express validator

    //1. setup rules for validations
    const rules = [
        body("name").notEmpty().withMessage("Name is required."),
        body("price")
            .isFloat({ gt: 0 })
            .withMessage("Price should be a positive value."),
        body("imageUrl")
            .custom((value, { req }) => {
                if (!req.file) {
                    throw new Error("Image is required.");
                }
                return true;
            })
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
