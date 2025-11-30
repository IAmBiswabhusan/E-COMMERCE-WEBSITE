import { getCartProductsFromLS } from "./getCartProductsFromLS";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement =( event, id, stock, price ) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity =
      currentCardElement.querySelector(".productQuantity"); 
    const productPrice =  currentCardElement.querySelector(".productPrice"); 
      let cartProducts = getCartProductsFromLS();
      let quantity = 1;
      let localPrice = 0;
      let existingProduct = cartProducts.find((prod) => prod.id === id);
        if (existingProduct) {
            quantity = existingProduct.quantity;
            localPrice = existingProduct.price;
        }
        else{
            localPrice = price;
            price = price;
        }
        if (event.target.className === "cartIncrement") {
          if (quantity < stock) {
            quantity += 1;
          } else if (quantity >= stock) {
            quantity = stock;
          }
        }
        if (event.target.className === "cartDecrement") {
          if (quantity === 0) {
            removeProductFromCart(id);
          } 
          else if (quantity > 1) {
            quantity -= 1;
          } else if (quantity <= 1) {
            quantity = 0;
          }
        }
        localPrice = price * quantity;
        localPrice = Number(localPrice.toFixed(2));
        let updatedProduct = { id, quantity, price: localPrice };
        cartProducts = cartProducts.map((prod) =>
          prod.id === id ? updatedProduct : prod
        );
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        productQuantity.innerText = quantity;
        productPrice.innerText = `₹${localPrice}`;
        if (quantity === 0){
        removeProductFromCart(id);
        }
        updateCartProductTotal();
};