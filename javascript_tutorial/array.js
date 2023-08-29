const carrito =['producto 1','producto 2', 'producto 3'];

console.log (carrito);

const appContenedor = document.querySelector('#app');

let html = '';

carrito.forEach(producto=> {
    html += `<li>${producto}</li>`
});

appContenedor.innerHTML =html;

