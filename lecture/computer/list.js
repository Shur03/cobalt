class product {
    constructor(images, name, year, def, price) {
        thid.images = images;
        this.name = name;
        this.year = year;
        this.def = def;
        this.price;
    }
}
let products = [
    new product("ProArt Studiobook", 2022, "gdhwhe jeji ", 2000000),
    new product("Zenbook Pro", 2023, "gdhwhe jeji ", 3500000),
    new product("  ExpertBook B5", 2021, "gdhwhe jeji ", 2000000),
    new product("ASUS Chromeboo CX9", 2022, "gdhwhe jeji ", 2700000),
    new product("ASUS TUF Gaming F15", 2023, "gdhwhe jeji ", 3400000),
    new product("ProArt Studiobook 16", 2022, "gdhwhe jeji ", 1200000),

];
window.addEventListener("load", showData());
function showData() {
    let productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach((product) => {
        let productElement = document.createElement("section");
        productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Quantity: ${product.year}</p>
      `;
        productList.appendChild(productElement);
    });
}
// document.getElementById("demo").innerHTML
/*(function () {
    "use Script";
    var newElement = document.createElement(article);
    newElement.textContent = ""
});*/