
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


const searchParams = new URLSearchParams(location.search);
const newId = searchParams.get("id") 
const cartlocal = JSON.parse(localStorage.getItem("canape")) || [];

//modification de l'adresse d'appel à l'API
const newUrl = `http://localhost:3000/api/products/${newId}`;

fetch(newUrl)
    .then((response) => response.json())
    .then((data) => {
        page_url(data);
        // fonction pour la création de la card de la page produit
        console.log("data",data);
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
/*             var inputQty = document.getElementById("quantity").value;
            const title = document.getElementById("title")
            title.innerHTML = `${data.name}`
            ;
            var inputColor=document.getElementById("colors").option;
            let names = [data.name];
            localStorage.setItem("names", JSON.stringify(names));

            let product = [newId,(data.colors),inputQty];
            localStorage.setItem("product", JSON.stringify (product));
            

            let description = [data.description];
            localStorage.setItem("description", JSON.stringify(description));
            
            let imageUrl = [data.imageUrl,data.altTxt];
            localStorage.setItem("imageUrl", JSON.stringify(imageUrl));
            let price = [data.price];

            localStorage.setItem("price",JSON.stringify(price));
           //let arr =[newId,data.name,data.altTxt,data.imageUrl,data.description,inputQty,data.price];
           //localStorage.setItem("order", JSON.stringify(arr));   
           
          
               
           } */
        
           const btnAddBasket = document.getElementById("addToCart");
           btnAddBasket.addEventListener("click", (e) => {
               e.preventDefault();
               const list = document.getElementById("colors");
               const quantity = document.getElementById("quantity");
   
               // créer un nouveau produit
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
            for (products of cartlocal) {
                 switch (products.id) {
                     case objectProduct.id:
                        isAlreadyPresent = true;
                         indexModification = cartlocal.indexOf(products);
                }
                console.log(products)
            }

            // si déjaPresent incrémente seulement la quantité
            if (isAlreadyPresent) {
                cartlocal[indexModification].quantity =
                    +cartlocal[indexModification].quantity + +objectProduct.quantity;
                    
                localStorage.setItem("canape", JSON.stringify(cartlocal));
                // si non, ajoute le produit au localStorage
            } else {
                cartlocal.push(objectProduct);
                localStorage.setItem("canape", JSON.stringify(cartlocal));
            }

            //    console.log("object",objectProduct);
            //     cartlocal.push(objectProduct);
            //     localStorage.setItem("canape", JSON.stringify(cartlocal));
            //     alert("Produit ajouté au panier");
        
           });
    
        

     

    


});  
