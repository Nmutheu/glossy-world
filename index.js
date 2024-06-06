let cart = [];

function addToCart(product) {
    cart.push(product);
    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });
}

function checkout() {
    if (cart.length > 0) {
        alert('Checkout successful! Thank you for shopping with us.');
        cart = [];
        displayCart();
    } else {
        alert('Your cart is empty. Please add some items before checking out.');
    }
}
