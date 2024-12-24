// cart.js
function displayCart() {
    // Retrieve cart data from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Clear the cart display
    cartItems.innerHTML = '';

    // Display each cart item
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Display the total
    totalElement.textContent = `Total: $${total}`;
}

// Call the function to display the cart on page load
document.addEventListener('DOMContentLoaded', displayCart);
