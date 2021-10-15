
        // fonction pour la création de la card de la page produit      
const order = JSON.parse(localStorage.getItem("order")) || [];


   function cart(){   
        const cart__items = document.getElementById("cart__items");
        cart__items.innerHTML+=`
        <section id="cart__items">
        <article class="cart__item" data-id="${order[0]}">
                <div class="cart__item__img">
                  <img src="" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2></h2>
                    <p></p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${order[1]}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>
              </section>`
              ;       
   }
cart();
  

