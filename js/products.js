/*
class Product {
    constructor(id, title, price, description, category, image, rating) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.description = description;
      this.category = category;
      this.image = image;
      this.rating = rating;
    }
  }
  
 
  class ProductService {
    constructor(apiUrl) {
      this.apiUrl = apiUrl;
    }
  
  
    async #fetchData(endpointData, optionsProvided = {}) {
      try {
        const responseExpected = await fetch(`${this.apiUrl}${endpointData}`, optionsProvided);
        if (!responseExpected.ok) {
          throw console.error(`Error: ${responseExpected.statusText}`);
        }
        return await responseExpected.json();
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  
    
    async getProducts() {
      return await this.#fetchData('/products');
      };
  
   
    async getProductById(id) {
      return await this.#fetchData(`/products/${id}`), {
        method: 'GET'
      };
    }
  
   
    async deleteProduct(id) {
      return await this.#fetchData(`/products/${id}`, {
        method: 'DELETE'
      });
    }
  }

    const productService = new ProductService('https://fakestoreapi.com');
    productService.getProducts().then((products) => console.log(products));
    productService.getProductById(1).then((product) => console.log(product));
    productService.deleteProduct(1).then((product) => console.log(product));
    
  
    // Create 2 classes, first class ProductService, second class Product;
 
    // First class should have a private method that uses fetch to hit any endpoint.
     
    // Second class should have a constructor that takes in the following parameters:
    // category, description, id, image, price, rating, title

    // Create 3 methods in the ProductService
    // getProducts() - Gets all the products and returns it;
    // getProductById() - Gets products by id;
    // deleteProduct()
     
// https://fakestoreapi.com/
 
// schema - how a product should look.
 
// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
*/
class Product {
  #handlePromise = async ({ url, method = "GET", body = null }) => {
    const response = await fetch(`https://fakestoreapi.com/${url}`, {
      method,
      body: body ? JSON.stringify(body) : null,
    });
    return await response.json();
  };
  getProduct = async () => {
    const response = await this.#handlePromise({ url: "products/10" });
    console.log(response);
  };
  addProduct = async () => {
    const product = {
      title: "new product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };
    const response = await this.#handlePromise({ url: "products", method: "POST", body: product});
    console.log(response);
  };
  deleteProduct = () => {};
}

export default productService;