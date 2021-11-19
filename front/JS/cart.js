   
//****************************************************************Récupération des données des produits commandés **********************************/        
    let canape = JSON.parse(localStorage.getItem("canape"));
//Récupération de la partie du DOM à modifier pour afficher les produits commandés */
    const items = document.getElementById("cart__items");
//Déclaration de la variable contenant la structure du panier à répéter pour chaque produit */
    let structureProduitPanier = [];
//**********************************************************************Si le panier est vide ****************************************************/    
    if(canape === null || canape == 0){
      document.getElementById("form").style.display = "none";
      const totalQty = document.getElementById("totalQuantity");
      totalQty.innerHTML="0";
      const totalPrice = document.getElementById("totalPrice");
      totalPrice.innerHTML="0";
      alert("je suis vide");
    }
//********************************************************************Si le panier n'est pas vide************************************************/    
    else{     
      for(k = 0; k < canape.length; k++){       
          const totalLinePrice = (canape[k].quantity) * (canape[k].price);       
        structureProduitPanier = 
        structureProduitPanier + 
        `
        <article class="cart__item" data-id="${(canape[k]).newId}">
                <div class="cart__item__img">
                  <img src="${(canape[k]).imageUrl}" alt="${(canape[k]).altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${(canape[k]).name}</h2>
                    <p>${totalLinePrice}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${canape[k].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <button class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>
        `;
      }            
//****************************************************************Affichage de la liste des produits commandés *******************************************/
        if (k == canape.length){
        items.innerHTML = `${structureProduitPanier}`;      
    }else{
      alert("null");
    } 
        }
        // fin de l'affichage des produits du panier
//***************************************************************** Gestion de la suppression des produits du panier ****************************************//
// selection des boutons supprimer
let deleteItem = Array.from(document.querySelectorAll(".deleteItem"));
for (let l = 0; l < deleteItem.length; l++)[
  deleteItem[l].addEventListener("click", (event) => {
    event.preventDefault();
    //selection de l'id du produit qui va être supprimé en cliquant sur le bouton
    let idSelectionnerSuppression = canape[l].id;
    //utilisation de la methode filter permettant de choisir les éléments à garder et ceux à supprimer.
    canape = canape.filter(product => product.id !== idSelectionnerSuppression);
    //on envoie la variable dans le localStorage 
    //
    localStorage.setItem("canape",JSON.stringify(canape));
    
    alert ("ce produit a été supprimé du panier");
     window.location.href= "cart.html";
     // callback(elementCourant[, index[, tableauEntier]])
  })
]
//******************************************************************** montant total du panier ************************************************************************//
//Declaration de la variable pour y mettre les prix dans le panier. 
let prixTotalCalcul = [];
//aller chercher les prix dans le panier 
for (let m = 0;m<canape.length; m++){
  let prixTotPanier = (canape[m].quantity) * (canape[m].price);
//mettre les prix du panier dans la variable "prixTotalPanier"
  prixTotalCalcul.push(prixTotPanier);
}
//addition des prix qu'il y a dans le tableau de la variable "prixTotalCalcul" avec la méthode .reduce.
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = prixTotalCalcul.reduce(reducer,0);
// le code html du prix total à afficher
prixTot=document.getElementById("totalPrice");
prixTot.innerHTML = `${prixTotal}`;
//******************************************************************** quantité totale du panier ************************************************************************//
// gestion total quantité produits commandés. 
let qteTotaleCalcul = [];
for (let n = 0;n<canape.length; n++){
  let qteTotalePanier = (canape[n].quantity);
  qteTotaleCalcul.push(qteTotalePanier);
}
//le code html de la quantité totale à afficher. 
var total = qteTotaleCalcul.reduce((a, b)=> a + b,0);
qteTot = document.getElementById("totalQuantity");
qteTot.innerHTML = `${total}`;

//***********************************************************************Gestion changement de la quantité dans le panier ****************************************/
let changeItem = Array.from(document.querySelectorAll(".itemQuantity"));
for (let l = 0; l < changeItem.length; l++)[
  changeItem[l].addEventListener("change", () => {
    console.log(canape[l].id);
    canape[l].quantity=parseInt(changeItem[l].value);
    console.log(changeItem[l].value);
    localStorage.setItem("canape",JSON.stringify(canape));
    window.location.href="cart.html";
  })
]  
//**************************************************************************forumulaire*******************************************************************//
              let form = document.querySelector('#form');
//Evènement = la modification de firstName
              form.firstName.addEventListener('change', function() {
                validFirstName(this)
              });
              const validFirstName = function(inputFirstName){
//Création regExp pour la validation du champ firstName
                let firstNameRegExp = new RegExp(
                  '^[A-Z][a-zA-Z]+$','g'
                  )
                  let testFirstName = firstNameRegExp.test(inputFirstName.value);
                  let firstNameErrorMsg = inputFirstName.nextElementSibling;
                  if (testFirstName === true){  
                    //si la valeur est valide => notifier à l'utilisateur + envoyer les données à la variable newContact                  
                    firstNameErrorMsg.innerHTML = "Prénom Valide";
                    newContact.push(inputFirstName.value);
                    return true;
                  }
                  else{
                    //si la valeur n'est pas valide => notifier à l'utilisateur et ne pas envoyer les données à la variable newContact
                    firstNameErrorMsg.innerHTML = "Prénom non Valide";                   
                  }                 
                }
//Evènement = modification de lastName
              form.lastName.addEventListener('change', function() {
                validLastName(this)
              });
              const validLastName = function(inputLastName){
//creation regExp pour la validation du champ lastName
                let lastNameRegExp = new RegExp(
                  '^[A-Z][a-zA-Z]+$','g'
                  )
                  let testLastName = lastNameRegExp.test(inputLastName.value);
                  let lastNameErrorMsg = inputLastName.nextElementSibling;
                  if (testLastName === true){
                    //si la valeur est valide => notifier à l'utilisateur + envoyer les données à la variable newContact
                    lastNameErrorMsg.innerHTML='Nom Valide';  
                    newContact.push(inputLastName.value);                    
                    return true;
                  }
                  else{
                    //si la valeur n'est pas valide => notifier à l'utilisateur et ne pas envoyer les données à la variable newContact
                    lastNameErrorMsg.innerHTML='Nom Non Valide'; 
                  }
                }
//Evènement = la modification de l'adresse.
              form.address.addEventListener('change', function() {
                validAddress(this)
              });
              const validAddress = function(inputAddress){
//Création regExp pour la validation du champ adresse
                let addressRegExp = new RegExp(
                  '^[0-9]{1,5}( [-a-zA-Zàâäéèêëïîôöùûüç ]+)+$','g'
                  )
                  let testAddress = addressRegExp.test(inputAddress.value);
                  let addressErrorMsg = inputAddress.nextElementSibling;
                  if (testAddress === true){
                    //si la valeur est valide => notifier à l'utilisateur + envoyer les données à la variable newContact
                    addressErrorMsg.innerHTML='Adresse Valide';
                    newContact.push(inputAddress.value);      
                    return true;                    
                  }
                  else{
                    //si la valeur n'est pas valide => notifier à l'utilisateur et ne pas envoyer les données à la variable newContact
                    addressErrorMsg.innerHTML='Adresse Non Valide';  
                  }
                }
//Evènement = la modification de city
              form.city.addEventListener('change', function() {
                validCity(this)
              });
              const validCity = function(inputCity){
//création regExp pour la validation du champ city
                let cityRegExp = new RegExp(
                  '^[A-Z][a-zA-Z]+$','g'
                  )
                  let testCity = cityRegExp.test(inputCity.value);
                  let cityErrorMsg = inputCity.nextElementSibling;
                  if (testCity === true){
                    //si la valeur est valide => notifier à l'utilisateur + envoyer les données à la variable newContact
                    cityErrorMsg.innerHTML='Ville Valide';
                    newContact.push(inputCity.value);                    
                    return true;
                  }
                  else{
                    //si la valeur n'est pas valide => notifier à l'utilisateur et ne pas envoyer les données à la variable newContact
                    cityErrorMsg.innerHTML='Ville Non Valide';                    
                  }
                }
//Evènement =  la modification de email
              form.email.addEventListener('change', function() {
                validEmail(this)
              });
              const validEmail = function(inputEmail){
//Création regExp pour la validation du champ email
                let emailRegExp = new RegExp(
                  '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g'
                  )
                  let testEmail = emailRegExp.test(inputEmail.value);
                  let emailErrorMsg = inputEmail.nextElementSibling;                  
                  if (testEmail === true){
                    //si la valeur est valide => notifier à l'utilisateur + envoyer les données à la variable newContact
                    emailErrorMsg.innerHTML='Email Valide';
                    newContact.push(inputEmail.value);                    
                    return true;                     
                  }
                  else{
                    //si la valeur n'est pas valide => notifier à l'utilisateur et ne pas envoyer les données à la variable newContact
                    emailErrorMsg.innerHTML='Email Non Valide';                    
                  }
                }
//***********************************************************Creation de la variable newContact******************************************//
                let newContact = [];
                console.log(newContact);  
                // selection du bouton "commander" dans le DOM
                let orderBtn = document.querySelector("#order");
                // évènement au clic sur le bouton commander
                orderBtn.addEventListener("click",(event) => { 
                // prévenir le comportement par défaut du bouton (rechargement de la page)
                event.preventDefault();
                // si va variable newContact contient bien des données (vérifiées au préalable)
              if (
                (newContact[0] !== undefined) &
                (newContact[1] !== undefined) &
                (newContact[2] !== undefined) &
                (newContact[3] !== undefined) &
                (newContact[4] !== undefined)   
            ){
              // création de l'objet contact à partir de la variable newContact
                const contact = { 
                  firstName:document.getElementById("firstName").value,
                  lastName:document.getElementById("lastName").value,
                  address:document.getElementById("address").value,
                  city:document.getElementById("city").value,
                  email:document.getElementById("email").value
                };
              // création de la variable contenant les id des produits commandés
                let products = [];
            for (product of canape) {
                products.push(product.id);
            }
                console.log(products);
                console.log(contact);
              // fetch url envoi des données au serveur 
                const promise01 = fetch(`http://localhost:3000/api/products/order`, {
                  method:"POST",
                  // envoi de l'objet contact et de la variable products en "POST"
                  body: JSON.stringify({contact,products}),
                  headers: {
                    "Content-Type":"application/json",            
                  },                 
                });
                console.log(promise01);
                
                promise01.then( async (data) => {
                  try{
                    const contenu = await data.json();
                    console.log(contenu);
                    // puis récupérer dans la réponse le numéro de commande "orderId"
                    orderId = contenu.orderId;
                    // constitution de l'objet "order" contenant les données contact products et l'orderId
                    const order = {
                      contact: contenu.contact,
                      products: contenu.products,
                      orderId: contenu.orderId
                    }
                    console.log(order.products);
                    // envoi au localStorage des données 
                    localStorage.setItem("order",JSON.stringify(order));
                    localStorage.setItem("orderId",JSON.stringify(orderId));
                    // redirection de l'utilisateur vers la page confirmation.html
                    window.location.href = `./confirmation.html`;
                    
                  }catch (e){
                    console.log(e);
                  }
                });
                
                }else{
                  // sinon => notification à l'utilisateur qu'il manque une information dans le formulaire ou qu'une information est erronée. 
          alert("Attention, il y a une erreur dans le remplissage du formulaire ou une information est manquante");   
        }
  
       
      })
