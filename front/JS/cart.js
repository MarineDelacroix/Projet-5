

   function cart(){   
    const product = JSON.parse(localStorage.getItem("product"));
    const names = JSON.parse(localStorage.getItem("names"));
    const description = JSON.parse(localStorage.getItem("description"));
    const imageUrl = JSON.parse(localStorage.getItem("imageUrl"));
    const price = JSON.parse(localStorage.getItem("price"));
    
        const items = document.getElementById("cart__items");{
        items.innerHTML+=`
        <article class="cart__item" data-id="${product[0]}">
                <div class="cart__item__img">
                  <img src="${imageUrl[0]}" alt="${imageUrl[1]}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${names[0]}</h2>
                    <p>${price[0]}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product[2]}">
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
                    firstNameErrorMsg.innerHTML='Prénom Valide';
                  }
                  else{
                    firstNameErrorMsg.innerHTML='Prénom Non Valide';
                  }
                  let firstNameValue = inputFirstName.value;
                  console.log(firstNameValue)
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
                let adressRegExp = new RegExp(
                  '^[A-Z][a-zA-Z]+$','g'
                  )
                  let testAddress = adressRegExp.test(inputAddress.value)
                  let addressErrorMsg = inputAddress.nextElementSibling;
                  if (testAddress){
                    addressErrorMsg.innerHTML='Adresse Valide';
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
                  let testCity = cityRegExp.test(inputCity.value)
                  let cityErrorMsg = inputCity.nextElementSibling;
                  if (testCity){
                    cityErrorMsg.innerHTML='Ville Valide';
                  }
                  else{
                    cityErrorMsg.innerHTML='Ville Non Valide';
                  }
                }
              //ecouter la modification de firstName
              form.email.addEventListener('change', function() {
                validFirstName(this)
              });
              const validEmail = function(inputEmail){
                //creation regExp pour validation firstName
                let emailRegExp = new RegExp(
                  '^[A-Z][a-zA-Z]+$','g'
                  )
                  let testEmail = emailRegExp.test(inputEmail.value)
                  let emailErrorMsg = inputEmail.nextElementSibling;
                  if (testEmail){
                    emailErrorMsg.innerHTML='Email Valide';
                  }
                  else{
                    emailErrorMsg.innerHTML='Email Non Valide';
                  }
                }
                let contact = new Object ();
                
                      
  


              

              



















       
              
