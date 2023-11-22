import express from "express";
import ProductController from "./src/controllers/products_controllers.js";
import ejsLayouts from "express-ejs-layouts";
import path from "path";

const server = express();
const port = 3000;

//setup view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

//use express middleware- ejslayouts
server.use(ejsLayouts);

//setup controllers
const productController = new ProductController();

//access to all the files in views folder
server.use(express.static("src/views"));
server.get("/", productController.getProducts);

server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
