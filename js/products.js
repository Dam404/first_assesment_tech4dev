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

const baseUrl = 'https://fakestoreapi.com';

class ProductService {
  async #fetchData(url, options = {}) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  async fetchAllProducts() {
    return await this.#fetchData(`${baseUrl}/products`);
  }

  async fetchProductById(id) {
    return await this.#fetchData(`${baseUrl}/products/${id}`);
  }

  async deleteProductById(id) {
    return await this.#fetchData(`${baseUrl}/products/${id}`, {
      method: 'DELETE'
    });
  }
}

const productService = new ProductService();

// productService.fetchAllProducts().then(products => {
//   console.log('Fetched products:', products);
//   });


export { ProductService, Product}