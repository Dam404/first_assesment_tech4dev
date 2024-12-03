import { ProductService, Product } from "./product.js";
 
const addEventsToDom = async () => {
    const product = new ProductService();
    const products = await product.getProducts();
    const container = document.getElementById("big-container");
    products.forEach((p) => {
        const newProduct = new Product(p)
        createEventCard(newProduct, container);
    })
}
 
 
const createEventCard = (product, container) => {
  // Get the container where the card will be added
  // Create the card element
  const card = document.createElement("div");
  card.className = "event_card";
  
  // Create the image
  const imageHolder = document.createElement("div");
  imageHolder.className = "image_holder";
  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  imageHolder.appendChild(img);
  card.appendChild(imageHolder);
 
  // Create the content container
  const content = document.createElement("div");
  content.className = "event_content";
 
  // Create and append the title
  const title = document.createElement("p");
  title.className = "event_title";
  title.textContent = product.title;
  content.appendChild(title);
 
  // Create and append the date
  const rating = document.createElement("p");
  rating.className = "event_rate";
  rating.innerHTML = product.rating.rate;
  content.appendChild(rating);
 
  // Create and append the description
  const description = document.createElement("p");
  description.textContent = product.description;
  content.appendChild(description);
 
  // Create and append the button
  const button = document.createElement("button");
  button.innerHTML = 'View details <i class="bi bi-arrow-up-right"></i>';
  button.addEventListener("click", (el, ev) => {
    window.location.href = "product.html?id=" + product.id;
    // console.log('I have been clicked!')
  })
  content.appendChild(button);
 
  // Append content to the card
  card.appendChild(content);
  // Append card to the container
  container.appendChild(card);
 
};
 
addEventsToDom();