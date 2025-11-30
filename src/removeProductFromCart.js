import { getCartProductsFromLS } from "./getCartProductsFromLS";
import showToast from "./showToast";
import { updateCartCount } from "./updateCartCount";
import { updateCartProductTotal } from "./updateCartProductTotal";
export const removeProductFromCart = (id) => {
  let cartProducts = getCartProductsFromLS();
  const productToDelete = cartProducts.find((prod) => prod.id === id);
  if (!productToDelete) {
    console.error("Product not found in cart:", id);
    return;
  }
  cartProducts = cartProducts.filter((prod) => prod.id !== id);
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
   let removeDiv = document.getElementById(`card${id}`);
   if (removeDiv) {
    showToast("delete", id);
     removeDiv.remove();
     updateCartCount(cartProducts.length); 
     updateCartProductTotal();
   }
};
