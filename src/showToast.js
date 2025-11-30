export default function showToast(action, productName) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  toast.textContent =
    action === "add"
      ? `${productName} has been successfully added to your cart!`
      : `Product Removed from your cart.`;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000); 
}
