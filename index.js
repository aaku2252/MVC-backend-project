import express from "express";
import ProductController from "./src/controllers/products_controllers.js";
import ejsLayouts from "express-ejs-layouts";
import path from "path";
import validateRequest from "./src/middlewares/validation.middleware.js";

const server = express();
const port = 3000;

// parse form data. If we dont use this then the "req.body" will be undefined.
server.use(express.urlencoded({ extended: true }));

//setup view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

//use express middleware- ejslayouts
server.use(ejsLayouts);

//setup controllers
const productController = new ProductController();

//access to all the files in views folder. we are using this only to access the css file   ---->>  server.use(express.static("src/views"));

server.get("/", productController.getProducts);
server.get("/new", productController.getAddForm);
server.post("/", validateRequest, productController.addNewProduct);

server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
