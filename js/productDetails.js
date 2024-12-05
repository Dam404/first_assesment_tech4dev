import { ProductService, Product} from './products.js'

const displayProductDetails = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (!productId) {
    console.error('Product ID not found in URL');
    return;
  }

  const productService = new ProductService();
  const productData = await productService.fetchProductById(productId);

  if (!productData) {
    console.error('Product not found');
    return;
  }

  const product = new Product(
    productData.id,
    productData.title,
    productData.price,
    productData.description,
    productData.category,
    productData.image,
    productData.rating
  );

  const container = document.getElementById('product-container');
  createProductDetails(product, container);
};

const createProductDetails = (product, container) => {
  // Create the card element
  const card = document.createElement("div");
  card.className = "product_details_card";

  // Create the image
  const imageHolder = document.createElement("div");
  imageHolder.className = "image_holder";
  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  imageHolder.appendChild(img);
  card.appendChild(imageHolder);

  // Create the title
  const title = document.createElement("h2");
  title.textContent = product.title;
  card.appendChild(title);

  // Create the price
  const price = document.createElement("p");
  price.className = "price";
  price.textContent = `$${product.price}`;
  card.appendChild(price);

  // Create the description
  const description = document.createElement("p");
  description.className = "description";
  description.textContent = product.description;
  card.appendChild(description);

  // Append the card to the container
  container.appendChild(card);
};

// Call the function to display product details
displayProductDetails();