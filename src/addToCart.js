import { getCartProductsFromLS } from "./getCartProductsFromLS";
import showToast from "./showToast";
import { updateCartCount } from "./updateCartCount";

getCartProductsFromLS(); // initialize cart count on page load

export const addToCart = (event, id, stock) => {
  let arrLocalStorage = getCartProductsFromLS();
  const currentCard = document.querySelector(`#card${id}`);
  const quantity = Number(
    currentCard.querySelector(".productQuantity").innerText
  );
  let price = currentCard
    .querySelector(".productPrice")
    .textContent.replace("₹", "")
    .trim();

  let existingProd = arrLocalStorage.find((prod) => prod.id === id);
  
  if (existingProd) {
    if (quantity > 0 && existingProd.quantity + quantity <= stock) {
      existingProd.quantity += quantity;
      existingProd.price = Number(price * existingProd.quantity);
      existingProd.price = Number(existingProd.price.toFixed(2));
      arrLocalStorage = arrLocalStorage.map((prod) =>
        prod.id === id ? existingProd : prod
      );

      localStorage.setItem("cartProducts", JSON.stringify(arrLocalStorage));
      updateCartCount(arrLocalStorage.length);
      return true;
      showToast("add", existingProd.name);
    }
    return false;
  }


  const totalPrice = Number(price * quantity);
  const newProduct = { id, quantity, price: totalPrice };
  arrLocalStorage.push(newProduct);

  localStorage.setItem("cartProducts", JSON.stringify(arrLocalStorage));
  updateCartCount(arrLocalStorage.length);
  showToast("add", currentCard.querySelector(".productName").innerText);
  console.log(
    `Added to cart: Product ID: ${id}, Quantity: ${quantity}, Price per item: ${price}`
  );
};
