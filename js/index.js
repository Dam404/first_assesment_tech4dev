// Create 2 classes, first class ProductService, second class Product;
 class Product{
    constructor(category, description, id, image, price, rating, title){
        this.category = category;
        this.description = description;
        this.id = id;
        this.image = image;
        this.price = price;
        this.rating = rating;
        this.title = title;
    }
 }

    class ProductService{
        constructor(){
            this.url = "https://fakestoreapi.com/products";
        }

        async fetchProducts(){
            const response = await fetch(this.url);
            const data = await response.json();
            return data;
        }

        async getProducts(){
            const products = await this.fetchProducts();
            return products;
        }

        async getProductById(id){
            const products = await this.fetchProducts();
            return products.find(product => product.id === id);
        }

        async deleteProduct(id){
            const products = await this.fetchProducts();
            const updatedProducts = products.filter(product => product.id !== id);
            return updatedProducts;
        }

        async addProduct(product){
            const products = await this.fetchProducts();
            products.push(product);
            return products;
        }
    }

    const productService = new ProductService();
    productService.getProducts().then(products => console.log(products));
    productService.getProductById(1).then(product => console.log(product));
    productService.deleteProduct(1).then(products => console.log(products));
    productService.addProduct(new Product).then(products => console.log(products));


// First class should have a private method that uses fetch to hit any endpoint.
 
// Create 4 methods in the ProductService
// getProducts() - Gets all the products and returns it;
// getProductById() - Gets products by id;
// deleteProduct()
// addProduct()
 
// https://fakestoreapi.com/
 
// schema - how a product should look.
 
// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"