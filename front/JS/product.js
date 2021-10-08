
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


const searchParams = new URLSearchParams(location.search);
const newId = searchParams.get("id") 

//modification de l'adresse d'appel à l'API
const newUrl = `http://localhost:3000/api/products/${newId}`;

fetch(newUrl)
    .then((response) => response.json())
    .then((data) => {
        page_url(data);
        // fonction pour la création de la card de la page produit
        function page_url() {      

            // insertion des information de la card du produit

        const item__img = document.getElementsByClassName("item__img");
        item__img[0].innerHTML += `
        <img src="${data.imageUrl}" alt="${data.altTxt}">
        `;
        const title = document.getElementById("title")
        title.innerHTML = `${data.name}`
        ;
        const price = document.getElementById("price")
        price.innerText = `${data.price}`    
        ;
        
        const description = document.getElementById("description")
        description.innerText = data.description
        ;
        }
    }
    )
