const cart = document.getElementById("cartValue");
export const updateCartCount = (count) => {
  cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${count}`;
};
