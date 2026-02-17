fetch('/api/products')
  .then(response => response.json())
  .then(products => {
    // Render to DOM, e.g., create cards
    const container = document.getElementById('product-list');
    products.forEach(product => {
      const card = document.createElement('div');
      card.innerHTML = `<img src="$$   {product.image_url}" alt="   $${product.name}">
                        <h3>$$   {product.name}</h3><p>R   $${product.price}</p>`;
      container.appendChild(card);
    });
  });