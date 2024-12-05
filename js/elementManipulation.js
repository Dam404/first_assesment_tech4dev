import { ProductService, Product } from "./products.js";

const addEventsToDom = async () => {
  const productService = new ProductService();
  const products = await productService.fetchAllProducts();
  const container = document.getElementById("big-container");
  products.forEach((p) => {
    const newProduct = new Product(
      p.id,
      p.title,
      p.price,
      p.description,
      p.category,
      p.image,
      p.rating
    );
    createEventCard(newProduct, container);
  });
};

const createEventCard = (product, container) => {

  const card = document.createElement("div");
  card.className = "event_card";

  const imageHolder = document.createElement("div");
  imageHolder.className = "image_holder";
  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  imageHolder.appendChild(img);
  card.appendChild(imageHolder);

  const title = document.createElement("h2");
  title.textContent = product.title;
  card.appendChild(title);

  const price = document.createElement("p");
  price.className = "price";
  price.textContent = `$${product.price}`;
  card.appendChild(price);

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = product.description;
  card.appendChild(description);

  const viewProductLink = document.createElement("a");
  viewProductLink.href = `product.html?id=${product.id}`;
  viewProductLink.textContent = "View Product";
  viewProductLink.className = "view_product_link";
  card.appendChild(viewProductLink);
  container.appendChild(card);
};

addEventsToDom();