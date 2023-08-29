const aplicarDescuento = new Promise ((resolve, reject) =>{
    let descuento = true;
    
    if (descuento) {
        resolve (' descuento aplicado');

    } else {
        reject ('no se pudo aplicar el descuento');
    }
});

console.log(aplicarDescuento);