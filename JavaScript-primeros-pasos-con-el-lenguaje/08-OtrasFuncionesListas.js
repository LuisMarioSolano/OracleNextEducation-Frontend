// Definicion de una lista con tipo de dato alfabetico
const ciudadesDispobibles = ['Bogota', 'Lima', 'Santiago', 'Montevideo'];
const paisesDisponibles = ['Colombia', 'Peru', 'Chile', 'Brasil', 'Argentina', 'Uruguay', 'Venezuela'];

// Conoce la cantidad de elementos que hay en una lista
const cantidadCiudades = ciudadesDispobibles.length;
console.log(`En la lista de ciudades hay ${cantidadCiudades} elementos`);
console.log(`En la lista de países hay ${paisesDisponibles.length} elementos`);

// Remover el primer elemento de una lista
ciudadesDispobibles.shift();
console.log(ciudadesDispobibles);
console.log(`En la lista de ciudades hay ${ciudadesDispobibles.length} elementos`);

// Remover el ultimo elemento de una lista
ciudadesDispobibles.pop();
console.log(ciudadesDispobibles);
console.log(`En la lista de ciudades hay ${ciudadesDispobibles.length} elementos`);

// Filtrar elementos de una lista
const paisesFiltrados = paisesDisponibles.filter((e) => e == 'Brasil');
console.log(paisesFiltrados);

// Convertir una lista en una cadena de texto
console.log(paisesDisponibles.join(' - '));

// Ordenar una lista
console.log(paisesDisponibles.sort());

// Conocer la posicion de un elemento en una lista
console.log(`Peru se encuentra en la posicion ${paisesDisponibles.indexOf('Peru')}`);

// Unificar dos listas
const listaPaisesYCiudades = ciudadesDispobibles.concat(paisesDisponibles);
console.log(listaPaisesYCiudades);