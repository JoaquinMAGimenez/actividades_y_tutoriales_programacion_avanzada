let viajando = function(destino){
    return `viajando a la ciudad de ${destino}`
}

let viaje = viajando('paris')

console.log(viaje)

//arrow functions /funcion flecha

let viajando2 = (destino, duracion) => `viajando a la ciudad de ${destino} por ${destino}`

let viaje2 = viajando2('londres', '9 dias')



//ejercicio crear  una funcion para calcular el area de un triangulo 

let perimetro_triangulo = (lado1, lado2, lado3 )=> resultado = (lado1+lado2+lado3)
let resultado = perimetro_triangulo(1,2,3)
console.log (resultado)

let perimetro_rectangulo = (ladoA, ladoB) => resultado2 = (2*ladoA+2*ladoB)
let resultado2 = perimetro_rectangulo (4,5)
console.log (resultado2)
