// récupération des informations de commande 
const orderId = JSON.parse(localStorage.getItem("orderId"));
const order = JSON.parse(localStorage.getItem("order"));   
// affichage dans la console des informations de commande (contenant contact products et l'orderId)
console.log(order);      
// récupération dans le DOM de la partie HTML à modifier pour afficher le numéro de commande.        
const orderNumber = document.getElementById("orderId");
orderNumber.innerHTML += `${orderId}`;
// Une fois le message affiché, le localStorage est vidé de ses données.                
localStorage.clear();
