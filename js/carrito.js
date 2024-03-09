function renderFinalCart() {
    const cart = getCartLS();

    let a = "";
    a += `<div class="deleteContainer"> <button class="deleteCart" id="deleteAll">Eliminar el carrito</button></div>`;
    if (cart.length > 0) {
        for (const producto of cart) {
            a += `<div class="cart-bill-list">
                <img src="${producto.image}" alt="${producto.productName}" width="72"/>
                <p class="p-name">${producto.productName}</p> 
                <p class="p-price">${producto.price}</p> 
                <button class="removeFromCart" id="${producto.id}" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg></button>
                </div>`    
        }
    } else {
        a = `<h1 class="text-center">No hay productos agregados al carro</h1>`
    }
    document.getElementById('carritoMain').innerHTML = a;
};
renderFinalCart()
renderCartSpan()

const deleteAllButton = document.getElementById("deleteAll") || false;

if (deleteAllButton !== false) {
    deleteAllButton.addEventListener("click", () => {deleteCart(); renderFinalCart(); alert("kapoot carrito")})
}

for (let i = 1; i <= (getProductsLS()).length; i++){
    deleteSingleProduct(i)
}

function deleteSingleProduct(id){
    let ids = document.getElementById(id) || false;

     if(ids !== false){
        ids.addEventListener('click', () => {    
            // const newCart = productDeleter(id)
            const newCart = getCartLS().filter(product => product.id !== id)
            saveCartLS(newCart)
            renderFinalCart()
            renderCartSpan()
            setTimeout(function(){
                window.location.reload();
            }, 1000)
            /* window.location.reload(); */
        })
    }
};



