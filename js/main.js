function agregarUnSoloItem(myId) {
    let item = document.getElementById(myId) || false
    let chain = myId;
    let parts = chain.split('-')
    let numero = Number(parts[1]);

    if(item !== false){
        let cart = getCartLS();
        let object = cart.find( (objeto) => objeto.id === numero)
        let findIndex = cart.indexOf(object);
        if( cart[findIndex].cantidad > 1){
            console.log(cart[encontrarIndex])
            cart[encontrarIndex].cantidad--
            console.log(cart[encontrarIndex].cantidad)
            saveCartLS(cart)
            renderFinalCart()
            renderCartSpan()
            window.location.reload()
        }
    }
}