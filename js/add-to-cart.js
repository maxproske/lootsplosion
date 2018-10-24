"use strict";

console.log("js loaded");

var button = document.querySelector(".add-to-cart");
button.addEventListener("click",
    function() {
        if (button.classList.contains("add-to-cart")) {
            button.classList.add("remove-from-cart");
            button.classList.remove("add-to-cart");
            button.textContent = "Remove from cart";
            return;
        }
        button.classList.add("add-to-cart");
        button.classList.remove("remove-from-cart");
        button.textContent = "Add to cart";
    }
);