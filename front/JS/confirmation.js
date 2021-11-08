
const order = JSON.parse(localStorage.getItem("order"));
console.log(order);
const orderId = document.getElementById("orderId");
orderId.innerHTML += `${order[2]}`;
localStorage.clear();
