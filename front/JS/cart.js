

   function cart(){ 
         
    const canape = JSON.parse(localStorage.getItem("canape"));
    
    
        const items = document.getElementById("cart__items");{
        items.innerHTML+=`
        <article class="cart__item" data-id="${(canape[0]).newId}">
                <div class="cart__item__img">
                  <img src="${(canape[0]).imageUrl}" alt="${(canape[0]).altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${(canape[0]).name}</h2>
                    <p>${(canape[0]).price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${(canape[0]).quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>
              <article class="cart__item" data-id="${(canape[1]).newId}">
                <div class="cart__item__img">
                  <img src="${(canape[1]).imageUrl}" alt="${(canape[1]).altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${(canape[1]).name}</h2>
                    <p>${(canape[1]).price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${(canape[1]).quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>
              <article class="cart__item" data-id="${(canape[2]).newId}">
                <div class="cart__item__img">
                  <img src="${(canape[2]).imageUrl}" alt="${(canape[2]).altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${(canape[2]).name}</h2>
                    <p>${(canape[2]).price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${(canape[2]).quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>
              `
              ;
        }
        canape.push(items);
        localStorage.setItem("items", JSON.stringify(canape));
        
        
      }
      cart();

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
                  let testFirstName = firstNameRegExp.test(inputFirstName.value)
                  let firstNameErrorMsg = inputFirstName.nextElementSibling;
                  if (testFirstName){
                    firstNameErrorMsg.innerHTML = "Prénom Valide";
                    return false;
                  }
                  else{
                    firstNameErrorMsg.innerHTML = "Prénom non Valide";
                    return true;
                  }
                  
                }
              //ecouter la modification de firstName
              form.lastName.addEventListener('change', function() {
                validLastName(this)
              });
              const validLastName = function(inputLastName){
                //creation regExp pour validation lastName
                let firstNameRegExp = new RegExp(
                  '^[A-Z][a-zA-Z]+$','g'
                  )
                  let testLastName = firstNameRegExp.test(inputLastName.value)
                  let lastNameErrorMsg = inputLastName.nextElementSibling;
                  if (testLastName){
                    lastNameErrorMsg.innerHTML='Nom Valide';
                    return true;
                  }
                  else{
                    lastNameErrorMsg.innerHTML='Nom Non Valide';
                    return false;
                  }
                }
              //ecouter la modification de l'adresse.
              form.address.addEventListener('change', function() {
                validAddress(this)
              });
              const validAddress = function(inputAddress){
                //creation regExp pour validation adresse
                let adressRegExp = new RegExp(
                  '^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$','g'
                  )
                  let testAddress = adressRegExp.test(inputAddress.value)
                  let addressErrorMsg = inputAddress.nextElementSibling;
                  if (testAddress){
                    addressErrorMsg.innerHTML='Adresse Valide';
                    return true;
                  }
                  else{
                    addressErrorMsg.innerHTML='Adresse Non Valide';
                    return false;
                  }
                }
              //ecouter la modification de firstName
              form.city.addEventListener('change', function() {
                validCity(this)
              });
              const validCity = function(inputCity){
                //creation regExp pour validation firstName
                let cityRegExp = new RegExp(
                  '^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$' ,'g'
                  )
                  let testCity = cityRegExp.test(inputCity.value)
                  let cityErrorMsg = inputCity.nextElementSibling;
                  if (testCity){
                    cityErrorMsg.innerHTML='Ville Valide';
                    return true;
                  }
                  else{
                    cityErrorMsg.innerHTML='Ville Non Valide';
                    return false;
                  }
                }
              //ecouter la modification de firstName
              form.email.addEventListener('change', function() {
                validFirstName(this)
              });
              const validEmail = function(inputEmail){
                //creation regExp pour validation firstName
                let emailRegExp = new RegExp(
                  '^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$','g'
                  )
                  let testEmail = emailRegExp.test(inputEmail.value)
                  let emailErrorMsg = inputEmail.nextElementSibling;
                  if (testEmail){
                    emailErrorMsg.innerHTML='Email Valide';
                    return true;
                  }
                  else{
                    emailErrorMsg.innerHTML='Email Non Valide';
                    return false;
                  }
                }
                
                      
                //Créer objet contact 

                //const order = document.getElementById('order');
                //Créer objet contact
                //définir l'action
                //order.addEventListener('click',contact);
                //order.innerElement += '<input type="submit" onclick="${contact}" action="" value="Commander !" id="order">'
                
                      
  


              

              



















       
                
