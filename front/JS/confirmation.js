
const orderId = JSON.parse(localStorage.getItem("orderId"));
const order = JSON.parse(localStorage.getItem("order"));   
console.log(order);             
const orderNumber = document.getElementById("orderId");
orderNumber.innerHTML += `${orderId}`;
// Une fois le message affiché, le localStorage est vidé de ses données. 
               
localStorage.clear();
