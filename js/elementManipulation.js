//create a productcard using javascript to manipulat DOM
// Products array containing product details
    const products = [
        { name: 'Event 1', description: 'A great product for daily use.', price: '$20', image: 'img/trending-image2.jpg' },
        { name: 'Event 2', description: 'Another fantastic item!', price: '$35', image: 'img/background-image.jpg' }
    ];

    // Create and style the container
    const container = document.getElementById('product-container');
    container.style.display = 'flex';
    container.style.gap = '20px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = '100vh';
    container.style.backgroundColor = '#f4f4f4';

    // Function to create product cards
    products.forEach(product => {
        // Create the product card
        const card = document.createElement('div');
        card.style.backgroundColor = 'white';
        card.style.borderRadius = '5px';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        card.style.padding = '20px';
        card.style.width = '200px';
        card.style.textAlign = 'center';

        // Create and style the product image
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '10px';

        // Create and style the product name
        const title = document.createElement('h3');
        title.textContent = product.name;
        title.style.margin = '10px 0';
        title.style.fontSize = '18px';

        // Create and style the product description
        const description = document.createElement('p');
        description.textContent = product.description;
        description.style.color = '#888';
        description.style.fontSize = '14px';

        // Create and style the product price
        const price = document.createElement('p');
        price.innerHTML = `<strong>${product.price}</strong>`;
        price.style.fontSize = '16px';

        // Create and style the "Add to Cart" button
        const button = document.createElement('button');
        button.textContent = 'View Cart';
        button.style.backgroundColor = '#0056b3';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.padding = '10px 15px';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.marginTop = '10px';

        // Add hover effect to the button
        button.addEventListener('mouseenter', () => button.style.backgroundColor = '#003f7f');
        button.addEventListener('mouseleave', () => button.style.backgroundColor = '#0056b3');

        // Append elements to the card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(price);
        card.appendChild(button);

        // Append the card to the container
        container.appendChild(card);
    });
