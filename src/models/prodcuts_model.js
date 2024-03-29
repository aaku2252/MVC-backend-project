export default class ProductModel {
    constructor(_id, _name, _desc, _price, _imageUrl) {
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.imageUrl = _imageUrl;
    }
    static get() {
        return products;
    }
    static update(productObj, imageUrl) {
        const index = products.findIndex((p) => p.id == productObj.id);
        console.log(productObj.id);
        products[index] = new ProductModel(
            productObj.id,
            productObj.name,
            productObj.desc,
            productObj.price,
            imageUrl
        );
    }

    static add(name, desc, price, imageUrl) {
        products.push(
            new ProductModel(products.length + 1, name, desc, price, imageUrl)
        );
    }
    static delete(id) {
        const index = products.findIndex((p) => p.id == id);

        products.splice(index, 1);
    }

    static getById(id) {
        return products.find((product) => product.id == id);
    }
}

let products = [
    new ProductModel(
        1,
        "Atomic Habits",
        "A supremely practical and useful book.",
        19.99,
        "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
    ),
    new ProductModel(
        2,
        "Ikigai",
        "The Japanese secret to a long and happy life",
        29.99,
        "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
    ),
    new ProductModel(
        3,
        "Deep Work",
        "RULES FOR FOCUSED SUCCESS IN A DISTRACTED WORLD",
        39.99,
        "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"
    ),
];
