import products from "../api/products.json";
import { fetchQuantityFromLs } from "./fetchQuantityFromLs";
import { getCartProductsFromLS } from "./getCartProductsFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductsFromLS();

let filterProducts = products.filter((product) => {
  return cartProducts.some((cartProd) => cartProd.id === product.id);
});

console.log(filterProducts);

const cartElement = document.getElementById("productCartContainer");
const templateContainer = document.getElementById("productCartTemplate");

const showCartProducts = () => {
  filterProducts.forEach((product) => {
    
    const { id, name, category, brand, price, stock, description, image } =
      product;
    const productTemplate = document.importNode(
      templateContainer.content,
      true
    );
    const lsActualData = fetchQuantityFromLs(product.id, price);
    productTemplate.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productTemplate.querySelector(".category").textContent = category;
    productTemplate.querySelector(".productName").textContent = name;
    productTemplate.querySelector(".productImage").src = image;
    productTemplate.querySelector(".productPrice").textContent = `₹${lsActualData.price}`;
    productTemplate.querySelector(".productQuantity").textContent = lsActualData.quantity;

    productTemplate
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productTemplate.querySelector(".remove-to-cart-button").addEventListener("click", () => removeProductFromCart(id));


    cartElement.append(productTemplate);
  });
};

showCartProducts();
updateCartProductTotal();