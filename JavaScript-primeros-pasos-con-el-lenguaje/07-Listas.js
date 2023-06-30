//Definicion de una lista con tipo de dato alfabetico
const ciudadesDispobibles = new Array('Buenos Aires', 'Cordoba', 'Santa Fe', 'Mendoza', 'Rosario');
console.log(ciudadesDispobibles);

//Definicion de una lista de forma abrebiada
const paisesDisponibles = ['España', 'Francia', 'Alemania', 'Italia', 'Portugal'];
console.log(paisesDisponibles);


//agregar un elemento a la lista al final
paisesDisponibles.push('Argentina');
ciudadesDispobibles.push('San Juan');
console.log(paisesDisponibles);
console.log(ciudadesDispobibles);

//agregar un elemento a la lista al principio
paisesDisponibles.unshift('Uruguay');
ciudadesDispobibles.unshift('La Plata');
console.log(paisesDisponibles);
console.log(ciudadesDispobibles);

//mostrar solo un elemento de la lista
console.log(paisesDisponibles[0]);
console.log(ciudadesDispobibles[0]);

console.log(paisesDisponibles[2]);
console.log(ciudadesDispobibles[2]);

// Eliminar un elemento de la lista y agregar uno nuevo
paisesDisponibles.splice(1, 2, 'Mexico', 'Colombia');
console.log(paisesDisponibles);
