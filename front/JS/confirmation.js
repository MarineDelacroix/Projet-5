

// récupération des informations de la commande (contact, canape + orderId)
const order = JSON.parse(localStorage.getItem("order"));
console.log(order);

// récupération dans le DOM de la zone du numéro de commande pour incrémentation.
const orderId = document.getElementById("orderId");
orderId.innerHTML += `${order[2]}`;
// Une fois le message affiché, le localStorage est vidé de ses données. 
localStorage.clear();
