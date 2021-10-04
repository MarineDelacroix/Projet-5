const url="http://localhost:3000/api/products"
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0].description);
    })
    .catch((erreur) => console.log("erreur : " + erreur));