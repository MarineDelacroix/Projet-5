

   
        
    let canape = JSON.parse(localStorage.getItem("canape"));
    const items = document.getElementById("cart__items");
    let structureProduitPanier = [];
    if(canape === null || canape == 0){
      alert("je suis vide");
    }else{
      
      for(k = 0; k < canape.length; k++){
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
                    <p>${(canape[k]).price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${(canape[k]).quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <button class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>
        `;
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


let deleteItem = Array.from(document.querySelectorAll(".deleteItem"));

for (let l = 0; l < deleteItem.length; l++)[
  deleteItem[l].addEventListener("click", (event) => {
    event.preventDefault();

    //selection de l'id du produit qui va être supprimé en cliquant sur le bouton
    console.log(event);
    let idSelectionnerSuppression = canape[l].id;
    

    //avec la methode filter je selectionne les éléments à garder et je supprime 
    //element ou le btn suppr a été cliqué. 
    canape = canape.filter(product => product.id !== idSelectionnerSuppression);
    //on envoie la variable dans le localStorage 
    //
    localStorage.setItem("canape",JSON.stringify(canape));
    console.log(canape)
    alert ("ce produit a été supprimé du panier");
    // window.location.href= "cart.html";

   
    console.log(random(min, max))  
    //avec la methode filter() selectionne les éléments à garder et supprime l'élément cliqué. 
  })
]
   
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
                let contact = []
                console.log(contact);

                
                  console.log(validFirstName);
                let orderBtn = document.querySelector("#order");
                orderBtn.addEventListener("click",(event) => { 
                event.preventDefault();
                
               
                if(contact) {
                let orderId = "6543134344468467"; 
                let order = [canape, contact, orderId];
                localStorage.setItem("order",JSON.stringify(order));
                window.location.href = "./confirmation.html"; 
                }else{
                  alert("Erreur dans le formulaire de contact");
                }
              })
              
            
            
              
            //}
                //     localStorage.setItem("canape",JSON.stringify(canape));
                //     localStorage.setItem("orderId", "65431343444684674");
                //     window.location.href = "./confirmation.html"
                //   })
                // }
              
                
                
                      
                //Créer objet contact 

                //const order = document.getElementById('order');
                //Créer objet contact
                //définir l'action
                //order.addEventListener('click',contact);
                //order.innerElement += '<input type="submit" onclick="${contact}" action="" value="Commander !" id="order">'
                
                      
  


              

              



















       
              
