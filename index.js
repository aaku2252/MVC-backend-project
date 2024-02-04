import express from "express";
import ProductController from "./src/controllers/products_controllers.js";
import ejsLayouts from "express-ejs-layouts";
import path from "path";
import validateRequest from "./src/middlewares/validation.middleware.js";
import { uploadFile } from "./src/middlewares/file-upload-middleware.js";

const server = express();
const port = 3500;

// parse form data. If we dont use this then the "req.body" will be undefined.
server.use(express.urlencoded({ extended: true }));

server.use(express.static("public"));

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
server.get("/update-product/:id", productController.getUpdateProductView);
server.post("/delete-product/:id", productController.deleteProduct);
server.post(
    "/",
    uploadFile.single("imageUrl"),
    validateRequest,
    productController.addNewProduct
);

server.post("/update-product", productController.postUpdateProduct);

server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
