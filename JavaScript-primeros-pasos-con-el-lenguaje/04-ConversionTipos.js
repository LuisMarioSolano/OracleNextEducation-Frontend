// Tipos de datos en JavaScript

// Alfanuméricos
// let nombrePasajero = "Juan";

// Numéricos
let valorBoleto = 1000;
const impuestoAeroportuario = 100;
const tasaEmbarque = 60/100;
var gestionAgencia = 100;

// Logicos (true o false)
let boletoActivo = true;

//Operaciones aritméticas

// Suma
// let totalBoletos = valorBoleto + tasaEmbarque + gestionAgencia;

// Orden de precedencia
//()
// * y /
// + y -
let totalBoletos = (valorBoleto + impuestoAeroportuario)+(valorBoleto + impuestoAeroportuario) * tasaEmbarque + gestionAgencia;
console.log(totalBoletos);

// Concatenación de textos
let nombrePasajero = "Juan";
let apellidoPasajero = "Pérez";

let nombreCompleto = nombrePasajero + " " + apellidoPasajero;
let pasaporte = '1000' + "12";
let multiplicacion = parseInt('1000') + parseFloat("10");

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

let noEsUnNumero = parseInt("Juan");
console.log(noEsUnNumero);