// Cree tres variables con datos personales al azar y cuando cargue la página web, muestre un mensaje de bienvenida para el usuario.  
// Modifique el ejercicio anterior para que el usuario sea quien ingrese sus datos.  
// Modifique el ejercicio anterior para mostrar un mensaje (luego del mensaje del ejercicio 1), que le diga al usuario cuántos días ha vivido desde que nació.  

const nombreIngresado = prompt("Ingrese su nombre:");
const edadIngresada = prompt("Ingrese su Edad:");
let fechaDeNacimiento = prompt("Ingrese su Fecha de Nacimiento (YYYY-MM-DD):");
fechaDeNacimiento = fechaDeNacimiento + "T00:00:00";

const nacimientoParsed = new Date(fechaDeNacimiento);
const hoy = new Date();

const diferenciaFechas = hoy - nacimientoParsed;
const diferenciaEnDias = Math.round(diferenciaFechas / (1000 * 60 * 60 * 24)); // Milisegundos * Segundos * Minutos * Horas

alert(`Hola ${nombreIngresado}!`);
alert(`La edad que ingresaste es ${edadIngresada}.`);
alert(`Según tu fecha de nacimiento ingresada, viviste aproximadamente ${diferenciaEnDias} dias.`);