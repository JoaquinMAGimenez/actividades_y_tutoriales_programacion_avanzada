const carrito =['producto 1','producto 2', 'producto 3'];

console.log (carrito);

carrito.map(producto=>{
    return 'el producto es' + producto
});

//en este caso el map no modifica el array original sino que crea uno nuevo

