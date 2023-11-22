import path from "path";
import ProductModel from "../models/prodcuts_model.js";

export default class ProductController {
    getProducts(req, res) {
        let products = ProductModel.get();
        // return res.sendFile(
        //     path.join(path.resolve(), "src", "views", "products.html")
        // );
        res.render("products.ejs", { products: products });
    }
}
