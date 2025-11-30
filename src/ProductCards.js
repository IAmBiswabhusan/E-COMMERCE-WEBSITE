import { addToCart } from "./addToCart";
import { homeQuantityUpdate } from "./homeQuantityToggle";

const productsContainer = document.getElementById('productContainer');
const productsTemplate = document.getElementById("productTemplate");
export const showProducts = (products) => {
    if(!products || products.length === 0) return;
    products.forEach((product) => {
        const{id,name,category,brand,price,stock,description,image} = product;
        const productClone = document.importNode(productsTemplate.content,true);
        productClone.querySelector('#cardValue').setAttribute("id" , `card${id}` );
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productPrice").textContent = `₹${price} `;
        productClone.querySelector(
          ".productActualPrice"
        ).textContent = `₹${5*price} `;
        productClone.querySelector(
          ".productStock"
        ).textContent = `${stock}`;
        productClone.querySelector(".productBrand").textContent = `Brand : ${brand}`;
        productClone.querySelector(".stockElement").addEventListener("click", () => {
          homeQuantityUpdate(event,id,stock);
        });
        productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {addToCart(event,id,stock);

        }
      );
        productsContainer.append(productClone);
    });
}