var cart=[];
function addItem(item) {
    cart.push(item);
    updateCart();
}

// Function to remove an item from the cart
function removeItem(item) {
    var index = cart.indexOf(item);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

// Function to update the cart display on the page
function updateCart() {
    var cartList = document.getElementById('cart');
    // Clear the current content of the cart list
    cartList.innerHTML = '';
    // Populate the cart list with the updated items
    cart.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}