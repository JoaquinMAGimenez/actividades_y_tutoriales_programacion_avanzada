var edad = 62; // Cambia esto por la edad que deseas verificar
var sexo = "mujer"; // Cambia esto por "hombre" o "mujer" según corresponda

var edadJubilacionHombre = 65;
var edadJubilacionMujer = 60;

if (sexo === "hombre") {
    if (edad < edadJubilacionHombre) {
        console.log("Eres un hombre y aún no estás en edad de jubilación.");
    } else {
        console.log("Eres un hombre y ya estás en edad de jubilación.");
    }
} else if (sexo === "mujer") {
    if (edad < edadJubilacionMujer) {
        console.log("Eres una mujer y aún no estás en edad de jubilación.");
    } else {
        console.log("Eres una mujer y ya estás en edad de jubilación.");
    }
} else {
    console.log("El valor de sexo no es válido.");
}
