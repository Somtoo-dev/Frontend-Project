let cart = [];

const addCartButtons = document.querySelectorAll(".add-cart");
const cartCount = document.querySelector(".cart-count");

addCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productCard = button.closest(".product-card");

        const productName = productCard.querySelector("h3").textContent;

        const productPrice = productCard
            .querySelector(".price")
            .textContent;

        const product = {
            name: productName,
            price: productPrice
        };

        cart.push(product);

        // Save cart in localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Update cart count
        cartCount.textContent = cart.length;

        console.log(cart);

    });

});

