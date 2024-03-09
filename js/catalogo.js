function renderProducts() {
    let content = "";
    const categoria = getCategoryLS();
    const filtrarCategoria = a => a.category === categoria
    const nuevoArray = categoria === "Todas" ? getProductsLS() : getProductsLS().filter(filtrarCategoria)

    for (const product of nuevoArray) {
        content += `<div class="col-md-4 product-card">
        <img src="${product.image}" alt="${product.productName}" class="img-fluid mx-auto">
        <h4>${product.productName}</h4> <br> <p>$${product.price}</p>
        <p><button class="addToCart" id="${product.id}">Agregar al carrito</button></p>
        </div>`;
    }
    document.getElementById("productos").innerHTML = content;
} 

renderProducts()
renderCartSpan()


for (let i = 1; i <= (getProductsLS()).length; i++){
    addToCart(i.toString())
};

