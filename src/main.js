
import "./style.css";
import products from "../api/products.json";
import { showProducts } from "./ProductCards.js";

console.log(products);
showProducts(products);

document.addEventListener("DOMContentLoaded", () => {
  const authBox = document.getElementById("authBox");
  if (!authBox) return; // Stop if navbar doesn't exist on page

  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (isLoggedIn) {
    const user = JSON.parse(localStorage.getItem("userData"));

    authBox.innerHTML = `
        <span style="margin-right:10px; font-weight:600; color:#ffae00;">
          Hi, ${user.name}
        </span>
        <a href="#" id="logoutBtn" style="color:#ff5722; font-weight:600;">Logout</a>
      `;


    document.getElementById("logoutBtn").addEventListener("click", () => {
      logoutUser();
    });
  }
});
// LOGOUT FUNCTION

function logoutUser() {
  localStorage.removeItem("loggedIn");
//   localStorage.removeItem("userData");
  window.location.reload();
}
