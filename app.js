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

// 2- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
                            //VER TABLA
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.


/********* Realizar carga de datos y mostrar en pantalla a cada persona cargada *********/
/********* Mostrar, en un alert, los metodos de cada persona creada *********/


class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }
  esMayorDeEdad() {
    if(this.edad >= 18){
      console.log("Es mayor de edad");
    }else{
      console.log("No es mayor de edad");
    }
  }
  mostrarDatos() {
    console.log(`El nombre de la persona es: ${this.nombre}`);
    console.log(`La edad es de: ${this.edad}`);
    console.log(`El número de documento: ${this.dni}`);
    console.log(`Su sexo: ${this.sexo}`);
    console.log(`El peso es de: ${this.peso}`);
    console.log(`Su altura es de: ${this.altura}`);
    console.log(`Nació en el año: ${this.nacimiento}`);
  }

  mostrarGeneracion() {

    if (this.nacimiento >= 1930 && this.nacimiento <= 1948) {
      console.log("Silent Generation");
    } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
      console.log("Baby Boom");
    } else if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
      console.log("Generacion X");
    } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
      console.log("Generacion Y");
    } else if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
      console.log("Generacion Z");
    } else {
      console.log("Sin generacion disponible");
    }
      
  }
}

let button = document.getElementById('button-1');
button.addEventListener('click', tomarDatas);

function tomarDatas() {
  console.log('Ejecutando Funcion')
  let dataName = document.getElementById('name').value;
  let dataEdad = document.getElementById('edad').value;
  let dataDni = document.getElementById('dni').value;
  let dataSexo = document.getElementById('sexo').value;
  let dataPeso = document.getElementById('peso').value;
  let dataAltura = document.getElementById('altura').value;
  let dataNacimiento = document.getElementById('nacimiento').value;

  let tabla = document.getElementById('body_table');
  let fila = document.createElement('tr')
  
  let array= [dataName,dataEdad,dataDni,dataSexo,dataPeso,dataAltura,dataNacimiento];
  for (let index = 0; index < array.length; index++) {
    let celda = document.createElement('td')
    celda.textContent = array[index];
    fila.appendChild(celda)
  }
  tabla.appendChild(fila)
  // celda.textContent= dataName;
  // fila.appendChild(celda)
  // tabla.appendChild(fila)
 
  // let fila = `<tr>
  //   <td>${dataName}</td>
  //   <td>2</td>
  //   <td>3</td>
  //   <td>4</td>
  //   <td>5</td>
  //   <td>6</td>
  //   <td>7</td>
  // </tr>
  // `
  }
  // tabla.appendChild(fila);
  // let celda = document.createElement('td')
  // let celda2 = document.createElement('td')
  // celda.textContent = dataName
  // celda2.textContent = 'segunda celda'
  // fila.appendChild(celda)





/*
const leandro = new Persona("leandro", 46, 12123123, "undefined", 90, 170, 1976);
const belisario = new Persona("Belisario", 19, 12123123, "undefined", 90, 170, 2003);
const carlitos = new Persona("Belisario", 19, 12123123, "undefined", 90, 170, 2018);


leandro.mostrarGeneracion();
belisario.mostrarDatos();
carlitos.esMayorDeEdad();

let generacion1 = (nacimiento) => {
  if (nacimiento >= 1930 && nacimiento <= 1948) {
    console.log("Silent Generation");
  } else if (nacimiento >= 1949 && nacimiento <= 1968) {
    console.log("Baby Boom");
  } else if (nacimiento >= 1969 && nacimiento <= 1980) {
    console.log("Generacion X");
  } else if (nacimiento >= 1981 && nacimiento <= 1993) {
    console.log("Generacion Y");
  } else if (nacimiento >= 1994 && nacimiento <= 2010) {
    console.log("Generacion Z");
  } else {
    console.log("Sin generacion disponible");
  }
}
*/
