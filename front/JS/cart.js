

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
                    <p>${description[0]}</p>
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
console.log(localStorage)



















        


