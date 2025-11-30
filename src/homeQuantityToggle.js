export const homeQuantityUpdate = (event,id,stock) => {
const currentCard = document.querySelector(`#card${id}`);
console.log(currentCard);
const quantityElement = currentCard.querySelector('.productQuantity');
console.log(quantityElement);
let quantity = parseInt(quantityElement.getAttribute("data-quantity")) || 1;
if(event.target.className === "cartIncrement"){
    if(quantity < stock){
        quantity += 1;
    }else if(quantity >= stock){
        quantity = stock;
    }
}
 if (event.target.className === "cartDecrement") {
      if (quantity > 1) {
        quantity -= 1;
      } else if (quantity <= 1) {
        quantity = 0;
      }
    }
    quantityElement.innerText = quantity;
quantityElement.setAttribute("data-quantity", quantity);
    return quantity;
}