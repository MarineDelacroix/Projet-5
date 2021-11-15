// déifnition de la classe product. 
class product {
    constructor(id,name,altTxt,imageUrl,description,colors,price,quantity) {
        this.id= id;
        this.name= name;
        this.altTxt= altTxt;
        this.imageUrl= imageUrl;
        this.description= description;
        this.colors= colors;
        this.price= price;
        this.quantity= quantity;
    }
}

// recherche de l'id du produit cliqué via URLSearchParams. 
const searchParams = new URLSearchParams(location.search);
const newId = searchParams.get("id");

// conception de l'objet Cartlocal
const cartlocal = JSON.parse(localStorage.getItem("canape")) || [];

//modification de l'adresse d'appel à l'API et ajout de l'id du produit. 
const newUrl = `http://localhost:3000/api/products/${newId}`;

fetch(newUrl)
    .then((response) => response.json())
    .then((data) => {
        page_url(data);
        // fonction pour la création de la page produit
        console.log("data",data);
        function page_url() {      

        // insertion des informations du produit dans la page html. 

        // ajout image du produit et du texte alternatif 

        const item__img = document.getElementsByClassName("item__img");
        item__img[0].innerHTML += `
        <img src="${data.imageUrl}" alt="${data.altTxt}">
        `;
        // ajout nom du produit 
        const title = document.getElementById("title")
            title.innerHTML = `${data.name}`
            ;
        // ajout du prix du produit 
        const price = document.getElementById("price")
        price.innerText = `${data.price}` 
        ;
        //ajout de la description du produit 
        const description = document.getElementById("description")
        description.innerText = data.description
        ;
        //définition des choix possibles pour les couleurs du produit 
        const colors = document.getElementById("colors")
        ;   
        colors.innerHTML += `
        <option value="${data.colors[0]}">${data.colors[0]}</option>
        <option value="${data.colors[1]}">${data.colors[1]}</option>
        `;
        if ((data.colors).length === 3){
        colors.innerHTML += `      
        <option value="${data.colors[2]}">${data.colors[2]}</option>
        `;
        }
        if ((data.colors).length === 4){
        colors.innerHTML +=`
        <option value="${data.colors[3]}">${data.colors[3]}</option>`;
        }  
        }


    // fonction pour l'ajout du produit au panier au clic sur le bouton correspondant. 
        function button(){
        const addToCart = document.getElementById("addToCart")
        addToCart.addEventListener("click", itemQuantity)
        
        addToCart.innerElement+= `
        <button onclick="${itemQuantity}"id="addToCart">Ajouter au panier</button>`;  
    }
    button();

        function itemQuantity($0){
            const quantityValue = document.getElementById("quantity")
            quantityValue.innerElement+= `
            <input type="number" name="itemQuantity" min="1" max="100" value="${$0.input}" id="quantity">`;
        }
    

//***********************************************/ Au clic sur le bouton commander *****************************************************************
        
           const btnAddBasket = document.getElementById("addToCart");
           btnAddBasket.addEventListener("click", (e) => {
               e.preventDefault();
               //récupération de la couleur choisie
               const list = document.getElementById("colors");
               //récupération de la quantité choisie 
               const quantity = document.getElementById("quantity");
               // création de l'objet nouveau produit d'après les infos sélectionnées. 
               let objectProduct = new product(
                   newId,
                   data.name,
                   data.altTxt,
                   data.imageUrl,
                   data.description,
                    list.value,
                    data.price,
                    parseInt(quantity.value, 10)
               );
               let isAlreadyPresent = false;
            let indexModification;
            //création boucle pour filtrage des produits du panier
            for (products of cartlocal) {
                 switch (products.id) {
                     case objectProduct.id:
                        isAlreadyPresent = true;
                         indexModification = cartlocal.indexOf(products);
                }
                console.log(products)
            }

            
            if (isAlreadyPresent) {
                // si l'id du produit est déjà présent, on incrémente seulement la quantité.
                cartlocal[indexModification].quantity =
                    +cartlocal[indexModification].quantity + +objectProduct.quantity;
                localStorage.setItem("canape", JSON.stringify(cartlocal));
            } else {
                // si non, ajoute la totalité du produit (objectProduct) au localStorage.
                cartlocal.push(objectProduct);
                localStorage.setItem("canape", JSON.stringify(cartlocal));
            }
        
           });

});  
