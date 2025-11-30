import { updateCartCount } from "./updateCartCount";

export const getCartProductsFromLS = () => {
  let cartProducts = localStorage.getItem("cartProducts");

  if (!cartProducts) {
    updateCartCount(0); 
    return [];
  }

  const parsedProducts = JSON.parse(cartProducts);
  updateCartCount(parsedProducts.length);
  return parsedProducts;
};
