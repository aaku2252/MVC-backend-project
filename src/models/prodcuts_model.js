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
