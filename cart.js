document.addEventListener('DOMContentLoaded', () => {
  const cartIcon = document.getElementById('cart-icon');
  const cartSidebar = document.getElementById('cart-sidebar');
  const closeCartButton = document.getElementById('close-cart');
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTotal = document.getElementById('cart-total');

  let cartItems = [];

  // Sample items to add to the cart (replace with your actual product logic)
  const sampleItems = [
      { id: 1, name: 'Tray Table', color: 'Black', price: 19.19, quantity: 2, image: 'https://via.placeholder.com/50' },
      { id: 2, name: 'Tray Table', color: 'Red', price: 19.19, quantity: 2, image: 'https://via.placeholder.com/50' },
      { id: 3, name: 'Table Lamp', color: 'Gold', price: 39.00, quantity: 2, image: 'https://via.placeholder.com/50' }
  ];

  // Open cart sidebar
  cartIcon.addEventListener('click', () => {
      cartSidebar.classList.add('open');
      updateCart();
  });

  // Close cart sidebar
  closeCartButton.addEventListener('click', () => {
      cartSidebar.classList.remove('open');
  });

  // Update cart display
  function updateCart() {
      cartItemsContainer.innerHTML = '';
      let subtotal = 0;

      cartItems.forEach(item => {
          subtotal += item.price * item.quantity;

          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <div class="cart-item-details">
                  <p>${item.name}</p>
                  <p>Color: ${item.color}</p>
                  <div class="cart-item-quantity">
                      <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                      <span>${item.quantity}</span>
                      <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                  </div>
              </div>
              <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
              <button class="remove-btn" data-id="${item.id}">✖</button>
          `;
          cartItemsContainer.appendChild(cartItem);
      });

      cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
      cartTotal.textContent = `$${subtotal.toFixed(2)}`;
  }

  // Handle cart item quantity change and removal
  cartItemsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('quantity-btn')) {
          const id = parseInt(e.target.getAttribute('data-id'));
          const action = e.target.getAttribute('data-action');
          const item = cartItems.find(item => item.id === id);

          if (action === 'increase') {
              item.quantity++;
          } else if (action === 'decrease' && item.quantity > 1) {
              item.quantity--;
          }

          updateCart();
      }

      if (e.target.classList.contains('remove-btn')) {
          const id = parseInt(e.target.getAttribute('data-id'));
          cartItems = cartItems.filter(item => item.id !== id);
          updateCart();
      }
  });

  // Initialize cart with sample items (remove this in your actual implementation)
  cartItems = sampleItems;
});
