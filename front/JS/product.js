
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
        
        
        const price = document.getElementById("price")
        price.innerText = `${data.price}` 
        ;
        console.log(data.price)
        
        const description = document.getElementById("description")
        description.innerText = data.description
        ;
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
        
            
        
          // utiliser les données ici  
        }
        const button = document.getElementById("addToCart")
        button.addEventListener("click", itemQuantity)
        addToCart.innerElement+= `
        <button onclick="${itemQuantity}"id="addToCart">Ajouter au panier</button>`;
        
        
        function itemQuantity($0){
            const quantityValue = document.getElementById("quantity")
            quantity.innerElement+= `
            <input type="number" name="itemQuantity" min="1" max="100" value="${$0.input}" id="quantity">`
            var inputQty = document.getElementById("quantity").value;
           
            const title = document.getElementById("title")
            title.innerHTML = `${data.name}`
            ;
           
           let arr = [newId,inputQty,(data.colors).value,data.price,data.imageUrl,data.altTxt,data.name];
           localStorage.setItem("order", JSON.stringify(arr));    


        
        }
    

    


    })
