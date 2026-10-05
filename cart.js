const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const cartCount = document.querySelector(".cart-count");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

cartCount.textContent = cart.length;

let total = 0;

cart.forEach(function(product) {

    const item = document.createElement("div");

    item.classList.add("cart-item");

    item.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    `;

    cartItems.appendChild(item);

    const price = Number(
        product.price.replace("₦", "").replace(",", "")
    );

    total += price;

});

cartTotal.textContent = "₦" + total.toLocaleString();