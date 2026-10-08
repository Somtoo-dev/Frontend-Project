const checkoutItems = document.querySelector("#checkoutItems");
const checkoutSubtotal = document.querySelector("#checkoutSubtotal");
const checkoutTotal = document.querySelector("#checkoutTotal");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

let subtotal = 0;

cart.forEach(function(product) {

    const item = document.createElement("div");

    item.classList.add("checkout-item");

    item.innerHTML = `
        <div>
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        </div>
    `;

    checkoutItems.appendChild(item);

    const price = Number(
        product.price.replace("₦", "").replace(",", "")
    );

    subtotal += price;

});

const delivery = 2000;

const total = subtotal + delivery;

checkoutSubtotal.textContent = "₦" + subtotal.toLocaleString();

checkoutTotal.textContent = "₦" + total.toLocaleString();