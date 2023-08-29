const lenguajes = ['JavaScript', 'PHP', 'Python', 'Ruby ' ];

const frameworks = ['ReactJS', 'Laravel', 'Django', 'Ruby on Rails'];

//unir los arreglos en uno solo

//forma antigua

let combinacion = lenguajes.concat(frameworks);

console.log (combinacion);

//forma nueva

let combinacion2 = [... lenguajes, ... frameworks];

console.log(combinacion2);

//otro ejemplo

let [ultimo] = [... lenguajes].reverse();

console.log(ultimo);