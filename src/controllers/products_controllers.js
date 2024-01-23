import path from "path";
import ProductModel from "../models/prodcuts_model.js";

export default class ProductController {
    getProducts(req, res) {
        let products = ProductModel.get();
        //we can also use --> res.render("products", { products: products });
        res.render("products.ejs", { products: products });
    }
    getAddForm(req, res) {
        res.render("new-product.ejs");
    }

    addNewProduct(req, res) {
        ProductModel.add(
            req.body.name,
            req.body.desc,
            req.body.price,
            req.body.imageUrl
        );
        let products = ProductModel.get();
        // res.render("products.ejs", { products: products });
        // by using the redirect method we can redirect the user back to the main page and the POST request will end here. so if we refreshes the page it does not resubmit the new product and keep adding the same product again and again.
        res.redirect("/");
    }
}
