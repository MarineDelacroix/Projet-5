

   
        
    let canape = JSON.parse(localStorage.getItem("canape"));
    const items = document.getElementById("cart__items");
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
      
        
        
        
//****************************************************************Affichage de la liste des produits commandés *******************************************/
      }
        if (k == canape.length){
        items.innerHTML = `${structureProduitPanier}`;      
    }else{
      alert("null");
    }
    
       
        } 

        // fin de l'affichage des produits du panier
        // gestion du bouton supprimer l'article 

// selection des boutons supprimer

//***************************************************************** Gestion de la suppression des produits du panier ****************************************//
let deleteItem = Array.from(document.querySelectorAll(".deleteItem"));

for (let l = 0; l < deleteItem.length; l++)[
  deleteItem[l].addEventListener("click", (event) => {
    event.preventDefault();

    //selection de l'id du produit qui va être supprimé en cliquant sur le bouton
    
    let idSelectionnerSuppression = canape[l].id;
    

    //avec la methode filter je selectionne les éléments à garder et je supprime 
    //element ou le btn suppr a été cliqué. 
    canape = canape.filter(product => product.id !== idSelectionnerSuppression);
    //on envoie la variable dans le localStorage 
    //
    localStorage.setItem("canape",JSON.stringify(canape));
    
    alert ("ce produit a été supprimé du panier");
     window.location.href= "cart.html";
     // callback(elementCourant[, index[, tableauEntier]])
    
 
    //avec la methode filter() selectionne les éléments à garder et supprime l'élément cliqué. 
  })
]
//******************************************************************** montant total du panier ************************************************************************//
//Declaration de la variable pour y mettre les prix dans le panier. 

let prixTotalCalcul = [];

//aller chercher les prix dans le panier 

for (let m = 0;m<canape.length; m++){
  let prixTotPanier = (canape[m].quantity) * (canape[m].price);
  //mettre les prix du panier dans la variable "prixTotPanier"
  prixTotalCalcul.push(prixTotPanier);
}
//addition des prix qu'il y a dans le tableau de la variable "prixTotCalcul" avec la méthode .reduce.

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

//  let newValue = [];
// var input = document.getElementsByTagName("input").itemQuantity;
// console.log(input);
// for (let q=0;q<canape.length;q++){
// input.addEventListener('change',function(){
//      parseInt(input.value)=(canape[q].quantity);
//      let idSelectionnerSuppression = canape[q].id;
//     canape = canape.filter(product => product.id !== idSelectionnerSuppression);
//      //on envoie la variable dans le localStorage 
//      localStorage.setItem("canape",JSON.stringify(canape));
//      alert ("ce produit a été supprimé du panier");
//      console.log(canape[q].id)

//   })
// }

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
  



  // localStorage.setItem("newQty", newQuantity);
  // newValue.push(newQuantity);
  // var storedValue = localStorage.getItem("newQty");
  // console.log(newValue); 




























   //**************************************************************************forumulaire*******************************************************************//
              let form = document.querySelector('#form');
              //ecouter la modification de firstName
              form.firstName.addEventListener('change', function() {
                validFirstName(this)
              });
              const validFirstName = function(inputFirstName){
                //creation regExp pour validation firstName
                let firstNameRegExp = new RegExp(
                  '^[A-Z][a-zA-Z]+$','g'
                  )
                  let testFirstName = firstNameRegExp.test(inputFirstName.value);
                  let firstNameErrorMsg = inputFirstName.nextElementSibling;
                  if (testFirstName === true){                    
                    firstNameErrorMsg.innerHTML = "Prénom Valide";
                    contact.push(inputFirstName.value);
                    return true;
                  }
                  else{
                    firstNameErrorMsg.innerHTML = "Prénom non Valide";                   
                  }                 
                }
              //ecouter la modification de firstName
              form.lastName.addEventListener('change', function() {
                validLastName(this)
              });
              const validLastName = function(inputLastName){
                //creation regExp pour validation lastName
                let lastNameRegExp = new RegExp(
                  '^[A-Z][a-zA-Z]+$','g'
                  )
                  let testLastName = lastNameRegExp.test(inputLastName.value);
                  let lastNameErrorMsg = inputLastName.nextElementSibling;
                  if (testLastName === true){
                    lastNameErrorMsg.innerHTML='Nom Valide';  
                    contact.push(inputLastName.value);                    
                    return true;
                  }
                  else{
                    lastNameErrorMsg.innerHTML='Nom Non Valide'; 
                  }
                }
              //ecouter la modification de l'adresse.
              form.address.addEventListener('change', function() {
                validAddress(this)
              });
              const validAddress = function(inputAddress){
                //creation regExp pour validation adresse
                let addressRegExp = new RegExp(
                  '^[A-Z][a-zA-Z]+$','g'
                  )
                  let testAddress = addressRegExp.test(inputAddress.value);
                  let addressErrorMsg = inputAddress.nextElementSibling;
                  if (testAddress){
                    addressErrorMsg.innerHTML='Adresse Valide';
                    contact.push(inputAddress.value);
                    
                    return true;                    
                  }
                  else{
                    addressErrorMsg.innerHTML='Adresse Non Valide';  
                  }
                }
              //ecouter la modification de firstName
              form.city.addEventListener('change', function() {
                validCity(this)
              });
              const validCity = function(inputCity){
                //creation regExp pour validation firstName
                let cityRegExp = new RegExp(
                  '^[A-Z][a-zA-Z]+$','g'
                  )
                  let testCity = cityRegExp.test(inputCity.value);
                  let cityErrorMsg = inputCity.nextElementSibling;
                  if (testCity){
                    cityErrorMsg.innerHTML='Ville Valide';
                    contact.push(inputCity.value);                    
                    return true;
                  }
                  else{
                    cityErrorMsg.innerHTML='Ville Non Valide';                    
                  }
                }
              //ecouter la modification de firstName
              form.email.addEventListener('change', function() {
                validEmail(this)
              });
              const validEmail = function(inputEmail){
                //creation regExp pour validation firstName
                let emailRegExp = new RegExp(
                  '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g'
                  )
                  let testEmail = emailRegExp.test(inputEmail.value);
                  let emailErrorMsg = inputEmail.nextElementSibling;
                  if (testEmail === true){
                    emailErrorMsg.innerHTML='Email Valide';
                    contact.push(inputEmail.value);                    
                    return true;                     
                  }
                  else{
                    emailErrorMsg.innerHTML='Email Non Valide';                    
                  }
                }
                //***********************************************************Creation de l'objet contact******************************************//
                let contact = []
                console.log(contact);  
                let orderBtn = document.querySelector("#order");
                orderBtn.addEventListener("click",(event) => { 
                event.preventDefault();
              if (
                (contact[0] !== undefined) &
                (contact[1] !== undefined) &
                (contact[2] !== undefined) &
                (contact[3] !== undefined) &
                (contact[4] !== undefined)   
            ){
               
                let orderId = "6543134344468467"; 
                let order = [canape, contact, orderId];
                localStorage.setItem("order",JSON.stringify(order));
                window.location.href = "./confirmation.html"; 
                }else{
                  alert("Oups il manque quelque chose");
                }
              })
            
              
           
              
                
                
                      
                
                
                      
  


              

              



















       
              
