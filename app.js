// 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.


/********* Mostrar el mensaje de ganador a travez de un popup (modal) *********/
let numero;
const generarNumero = () => {
  numero = Math.floor(Math.random() * 10);
  alert("El juego comenzó!!");
}

const compararNumero = (num) => {
  let numeroIngresado = num.value;
  
  if (numero == numeroIngresado) {
    alert(`Felicidades, acertaste! el numero era ${numero}`);
  } else if (numeroIngresado > numero){
    alert("El numero ingresado es mayor al numero magico");
  } else {
    alert("El numero ingresado es menor al numero magico");
  }
}
