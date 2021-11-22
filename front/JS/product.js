// redéfinition de la classe product. 
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
//création de la fonction page_url contenant les modifications effectuées dans le DOM pour l'affichage des infos du produit cliqué
function page_url(data) {      
  // insertion des informations du produit dans la page html. 
  // ajout image du produit et du texte alternatif 
  const item__img = document.getElementsByClassName("item__img");
    item__img[0].innerHTML += `
      <img src="${data.imageUrl}" alt="${data.altTxt}">
      `;
  // ajout nom du produit 
  const title = document.getElementById("title")
    title.innerHTML = `${data.name}`;

  // ajout du prix du produit 
  const price = document.getElementById("price")
    price.innerText = `${data.price}`;

  //ajout de la description du produit 
  const description = document.getElementById("description")
    description.innerText = data.description;
        //définition des choix possibles pour les couleurs du produit afin d'éviter les valeurs null ou undefined dans la liste 
  const colors = document.getElementById("colors");   
    // si 2 couleurs
    colors.innerHTML += `
      <option value="${data.colors[0]}">${data.colors[0]}</option>
      <option value="${data.colors[1]}">${data.colors[1]}</option>
      `;
    // si il y a trois couleurs possibles
    if ((data.colors).length === 3){
      colors.innerHTML += `      
        <option value="${data.colors[2]}">${data.colors[2]}</option>
        `;
    }
    // si il y a 4 couleurs possibles
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
    
// recherche de l'id du produit cliqué via URLSearchParams. 
const searchParams = new URLSearchParams(location.search);
const newId = searchParams.get("id");

// conception de la constante cartlocal
const cartlocal = JSON.parse(localStorage.getItem("canape")) || [];

//modification de l'adresse d'appel à l'API et ajout de l'id du produit dans cette dernière
const newUrl = `http://localhost:3000/api/products/${newId}`;
// fetch sur la nouvelle URL pour récupérer les infos du bon produit (selon id)
fetch(newUrl)
    .then((response) => response.json())
    .then((data) => {
        page_url(data);
        // fonction pour la création de la page produit
        console.log("data",data);

//***********************************************/ Au clic sur le bouton "Ajouter au panier" *****************************************************************
            
const btnAddBasket = document.getElementById("addToCart");
btnAddBasket.addEventListener("click", (e) => {
  // prévention sur le comportement par défaut du bouton par exemple rechargement de la page
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
  // déclaration de la variable pour vérifier la présence d'un produit dans le localStorage
  let isAlreadyPresent = false;
  // déclaration de la variable pour vérification de tous les produits
  let indexModification;
  //création boucle pour filtrage des produits du panier
  for (products of cartlocal) {
    switch (products.id && products.colors) {
      // vérification si un produit est déjà présent par son id
      case objectProduct.id && objectProduct.colors:
        isAlreadyPresent = true;
        indexModification = cartlocal.indexOf(products);
    }
    console.log(products)
  }
            // si l'utilisateur a bien fait un choix de couleur et que la quantité du produit est supérieure à zéro
  if((objectProduct.colors !== undefined) &
    (objectProduct.quantity !== 0)){
      if (isAlreadyPresent) {
      // si l'id du produit est déjà présent, on incrémente seulement la quantité.
        cartlocal[indexModification].quantity =
        +cartlocal[indexModification].quantity + +objectProduct.quantity;
        // on ajoute la quantité au produit correspondant et on envoi les données au localStorage
        localStorage.setItem("canape", JSON.stringify(cartlocal));
        // on prévient l'utilisateur que le produit a bien été ajouté au panier
        alert("Le produit a été ajouté au panier !");
      }else{
        // si non, ajoute la totalité du produit (objectProduct) au localStorage.
        cartlocal.push(objectProduct);
        // envoi de l'intégralité des données du produit au localStorage
        localStorage.setItem("canape", JSON.stringify(cartlocal));
        // on prévient l'utilisateur que le produit a bien été ajouté au panier. 
        alert("Le produit a été ajouté au panier !");
      }       
  }else{
            // si l'utilisateur n'a pas fait de choix de couleur ou de quantité pour le produit, 
            // une alerte apparait pour prévenir l'utilisateur, 
            // les données ne sont pas envoyées. 
            alert("Vous n'avez pas sélectionné de couleur ou de quantité pour ce produit !");
  }
});
});



