// L I S T A  D E  P R O D U C T O S  - productos.json mediante
const getProducts = () => {
    return fetch('../js/productos.json')
    .then(respuesta => respuesta.json())
    .then(data => {
        saveProductsLS(data)
        return data
    }) 
    /* .catch( error => {
        console.error("Error al obtener la peticion fetch: " + error)
    }) */
};
getProducts();

        // L O C A L   S T O R A G E  💾 💾 💾
    // main creators 🔨🔨🔨
const saveLS = (key, array) => localStorage.setItem(key, JSON.stringify(array))
const callLS = (key) => JSON.parse(localStorage.getItem(key)) || [];
// LS Productos ⚽⚽⚽
const saveProductsLS = (array) => saveLS("products",array)
const getProductsLS = () => callLS("products");
// obteniendo la categoria del array para filtrar en renderProductos()
const getCategoryLS = () => localStorage.getItem("filter") || "Todas"
// LS CARRITO 🛒🛒🛒
const saveCartLS = (array) => saveLS("cart",array);
const getCartLS = () => callLS("cart");
        // =================================================================
        // =================================================================
        //// C A T A L O G O  D R O P D O W N  F I L T E R  -- CATEGORIAS 
/* esto lo que hace es tomar el id de cada li del dropdown 
y guardar el key filter ese id para interpretarlo en renderProducts() */
function assignCategory (id){
    let x = document.getElementById(id);
    x.addEventListener("click", () => { 
        localStorage.setItem("filter", id)
    })
};
assignCategory("Todas")
assignCategory("Argentina")
assignCategory("Nacional")
assignCategory("Internacional")
        // =================================================================
        // =================================================================
        // S U M A R  A L  C A R R I T O 🛒 ➕
const addToCart = (idH) => {
    let id = document.getElementById(idH) || false;
    
    if ( id !== false ) {
        id.addEventListener('click', () => {
            const cart = getCartLS();
            const product = productFinder(idH);
            //console.log(`Se agrego el item ${idH} al carrito`)

            let found = cart.some((objeto) => objeto.id === Number(idH));
        
            if (found === false){
                cart.push(product);
                cart[cart.length-1].cantidad++;
                
                
            }else{
                //cart.indexOf(Number(idH))
                console.log("potato")
                let buscarIndex = cart.findIndex( function(objeto) {return objeto.id === Number(idH)})
                console.log(buscarIndex) 
                cart[buscarIndex].cantidad++}

            //cart.push(product);
            saveCartLS(cart);
            renderCartSpan();
        })
    }
}
// encontrar un producto para mandarlo a la LS
const productFinder = (e) => {
    const a = getProductsLS();
    const b = a.find(i => i.id === Number(e));
    return b;
}

const cartBadge = document.getElementById('cartIconBadge');
const renderCartSpan = () => {
    cartBadge.innerText = getCartLS().length;    
};
renderCartSpan()
// eliminar carrito entero
const deleteCart = () => {
    localStorage.removeItem("cart")
    renderCartSpan()
    renderFinalCart() 
};
// filtrador de elemento a eleiminar
const productDeleter = (e) => {
    const cart = getCartLS();
    const deleteItem = cart.filter(product => product.id !== e);
    return deleteItem;
};