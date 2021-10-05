const url="http://localhost:3000/api/products"
const productlist=
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        addCards(data);    
    })
    .catch((erreur) => console.log("erreur : " + erreur));

    //définition de la classe product pour affichage des produits//
    class product {
        constructor(id,name,altTxt,imageUrl,description,colors,price) {
            this.id= id;
            this.name= name;
            this.altTxt= altTxt;
            this.imageUrl= imageUrl;
            this.description= description;
            this.colors= colors;
            this.price= price;
        }
    }
    
    //page d'accueil fonction pour l'affichage des produits//
    function addCards(data) {
        for (product of data) {
            const items = document.getElementById("items")
            items.innerHTML += `   
            <a href="./product.html?id=42">
            <article>
              <img src="${product.imageUrl}" alt="${product.altTxt}">
              <h3 class="product.name">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
            </article>
          </a>`
        }
    }

