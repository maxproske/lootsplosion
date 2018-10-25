"use strict";

console.log("js loaded");

var checkoutCart = document.querySelector('#cart');

var button = document.querySelector(".add-to-cart");

button.addEventListener("click",
    function() {
        if (button.classList.contains("add-to-cart")) {
            button.classList.add("remove-from-cart");
            button.classList.remove("add-to-cart");
            button.textContent = "Remove from cart";

            checkoutCart.classList.remove('hidden');
            checkoutCart.setAttribute('aria-hidden', 'false');
            return;
        }
        button.classList.add("add-to-cart");
        button.classList.remove("remove-from-cart");
        button.textContent = "Add to cart";

        checkoutCart.classList.add('hidden');
        checkoutCart.setAttribute('aria-hidden', 'true');
    }
);