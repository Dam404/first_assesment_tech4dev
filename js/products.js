
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
  
  
    async #fetchData(endpointData, optionsProvided = {}) {
      const url = 'https://fakestoreapi.com/products';
      try {
        const responseExpected = await fetch(`${url + endpointData}`, optionsProvided);
        if (!responseExpected.ok) {
          throw console.error(`Error: ${responseExpected.statusText}`);
        }
        return await responseExpected.json();
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  
    
    async getProducts() {
      return await this.#fetchData();
      };
  
   
    async getProductById(id) {
      return await this.#fetchData(id), {
        method: 'GET'
      };
    }
  
   
    async deleteProduct(id) {
      return await this.#fetchData(id), {
        method: 'DELETE'
      };
    }
  }

    const productService = new ProductService('https://fakestoreapi.com');
    productService.getProducts().then((products) => console.log(products));
    productService.getProductById(1).then((product) => console.log(product));
    productService.deleteProduct(1).then((product) => console.log("This product is deleted", product));
    
    