import { getCartProductsFromLS } from "./getCartProductsFromLS";

export const fetchQuantityFromLs = (id,price) => {
    let cartProducts = getCartProductsFromLS();
    let quantity = 1;
    let existingProd = cartProducts.find((prod) => prod.id === id);
    if (existingProd) {
        quantity = existingProd.quantity;
        price = existingProd.price;
        
    }
    return { quantity, price };
};