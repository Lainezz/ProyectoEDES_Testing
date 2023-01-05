//Variable global con provincias
const provinciasValidas = [
  "Almería",
  "Jaén",
  "Granada",
  "Málaga",
  "Córdoba",
  "Sevilla",
  "Cádiz",
  "Huelva"
];

//Variable global con localizaciones válidas
const locValidas = [
  "CIUDAD,PROVINCIA,CP",
  "CIUDAD2,PROVINCIA2,CP2",
  "CIUDAD3,PROVINCIA3,CP3"
];

/*
************************************
************EJERCICIO 1*************
************************************
Implementar una función que compruebe la validez de los datos introducidos de los inputs relacionados con la ciudad, la provincia y el CP
Ciudad -> Sólo puede contener letras (sin números o carácteres especiales). La longitud máxima de la ciudad puede ser de 44 carácteres
Provincia -> Se debe comprobar que la provincia seleccionada existe dentro del array de provincias válidas (var global)
CP -> Sólo puede contener números y debe tener una longitud OBLIGATORIA de 5 números (XXXXX)

Por último, se debe comprobar que el CP corresponde con la provincia. Se comprueban los 2 primeros números
04XXX -> Almería
23XXX -> Jaén
18XXX -> Granada
29XXX -> Málaga
14XXX -> Córdoba
41XXX -> Sevilla
11XXX -> Cádiz
21XXX -> Huelva

Si la validación va correctamente, se deben concatenar todos los campos, sin espacios en blanco, en mayúsculas, separándose con "," y añadirse al principio del array de localizaciones válidas (locValidas) que es una variable global.
Si alguna de las validaciones no va correctamente, se debe imprimir por pantalla un mensaje de error. Los mensajes de error pueden ser mediante alert o mediante la modificación de los elementos del DOM.
Si se opta por usar alerts, el puntaje será menor que si se opta por modificar los elementos del DOM

Finalmente, almacenar ese String en el objeto predefinido LocalStorage con la key correspondiente.
*/
const checkLocation = () => {

  //cogemos los datos de la localización del formulario
  const ciudad = document.getElementById("inputCiudad").value;
  const provincia = document.getElementById("inputProvincia").value;
  const CP = document.getElementById("inputCP").value;

  //---------------------------------------------------------------------------------------------------------CIUDAD
  //comprobamos que la ciudad solo tenga letras y que tenga una longitud maxima de 44 caracteres
  let ciudadValida = false;
  let regExpCiudad = /^[a-zA-Z]{0,44}$/;
  if (regExpCiudad.test(ciudad)) {
    console.log("Ciudad válida :)");
    ciudadValida = true;
  }

  //---------------------------------------------------------------------------------------------------------PROVINCIA
  //comprobamos que la provincia existe dentro del array de provincias validas
  let provinciaValida = false;
  provinciasValidas.forEach(p => {
    if (p == provincia) {
      provinciaValida = true;
      console.log("Provincia válida");
    }
  })

  //---------------------------------------------------------------------------------------------------------CP
  //comprobamos que el CP se componga exclusivamente de 5 numeros con una expresión regular
  let CPvalido = false;
  const regExpCP = /^(\d{5})$/;
  if (regExpCP.test(CP)) {
    console.log("CP válido");
    CPvalido = true;
  } else {
    console.log("CP inválido");
  }

  //comprobamos que el CP se corresponde con el CP de la provincia según el array proporcionado
  let CPcorresponde = false;
  const codigosValidos = {
    "Almería":"04",
    "Jaén":"23",
    "Granada":"18",
    "Málaga":"29",
    "Córdoba":"14",
    "Sevilla":"41",
    "Cádiz":"11",
    "Huelva":"21"
  }
  
  if (codigosValidos[provincia] == CP.slice(0,2)) {
    CPcorresponde = true;
    console.log("el CP corresponde");
  } else {
    console.log("el CP no corresponde");
  }

  //-------------------------------------------------------------------------------------------------------FINAL

  //si todos los datos son correctos, añadimos el string a localstorage con la key "localizacion"
  if (ciudadValida && provinciaValida && CPvalido && CPcorresponde) {
    console.log("dirección correcta");
    //formar string correcto
    let localizacion = ciudad.toUpperCase() + "," + provincia.toUpperCase() + "," + CP.toUpperCase();
    localStorage.setItem('localizacion', localizacion); 

  } else {
    console.log("dirección incorrecta :(");
  }
}

/*
************************************
************EJERCICIO 2*************
************************************
Implementar una función que compruebe que la fecha de nacimiento es una fecha válida.
El año de la fecha introducida debe ser menor que el año en el que estamos.
Si no fuera así, se debe mostrar un mensaje advirtiendo que el año introducido no es correcto.

Si todo va bien, almacenar la fecha completa en el objeto predefinido LocalStorage
*/

const checkYear = () => {

  //cogemos el elemento HTML donde meteremos el mensaje de error
  const p = document.getElementById("errorFecha");

  //cogemos la fecha introducida en el formulario
  const fecha = document.getElementById("inputFechaNac").value;

  //la convertimos al formato correcto para trabajar con ella
  const fechaDate = new Date(fecha);

  //el año de la fecha introducida debe ser menor que el año en el que estamos
  if (fechaDate.getFullYear() < 2022) {

    //si el año es valido, almacenamos la fecha en localstorage en formato string
    localStorage.setItem('fecha', fecha);

    //y borramos el mensaje de error (si existe)
    p.innerHTML = "";

  } else {

    //si no es válido, mostramos un mensaje de error
    p.innerHTML = "El año de tu fecha de nacimiento debe ser menor que el año en el que estamos.";
  }

}


/*
************************************
************EJERCICIO 3*************
************************************
Se especifica que la aplicación debe mantener los datos introducidos por el usuario
aunque este cierre y abra la ventana del navegador.
Para ello se debe usar el objeto LocalStorage.
Poner el valor de la key específica para cada uno de los inputs en cada input.
Ejemplo:
  Para el input Usuario -> Se debe poner el valor de la key "user"

KEYS para el objeto LocalStorage
Usuario -> "user"
Password -> "password"
Email -> "email"
Localizacion -> "location"
*/
const putInfo = () => {

  //seleccionamos los campos que vamos a usar
  const campoUser = document.getElementById("inputUser");
  const campoPassword = document.getElementById("inputPassword");
  const campoFecha = document.getElementById("inputFechaNac");
  const campoEmail = document.getElementById("inputEmail");
  const campoCiudad = document.getElementById("inputCiudad");
  const campoProvincia = document.getElementById("inputProvincia");
  const campoCP = document.getElementById("inputCP");


  //recogemos los datos del formulario
  const user = campoUser.value;
  const password = campoPassword.value;
  const email = campoEmail.value;
  
  
  //el password no va a funcionar dependiendo del navegador porque si le das a no recordar te lo borra (firefox)
  campoPassword.value = localStorage.getItem('password');


  //metemos datos en  el localstorage
  localStorage.setItem('user', user);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

   //cargamos los datos de localstorage, si es que existen 
   campoFecha.value = localStorage.getItem('fecha');
   campoUser.value = localStorage.getItem('user');
   campoUser.email = localStorage.getItem('email');
   let location = localStorage.getItem('location').split(",");
   let ciudad = location[0];
   let provincia = location[1];
   let CP = location[2];
   campoCiudad.value = ciudad;
   campoProvincia.value = provincia;
   campoCP.value = CP;
 
}

/**
 * No modificar este método. Permite la ejecución del programa de forma correcta.
 * Para la resolución de los ejercicios, simplemente codifica lo que se pide dentro
 * de la función correspondiente.
 * @param {*} e 
 */
const checkForm = (e) => {
  e.preventDefault();
  
  checkLocation();
  checkYear();
};

function onIniciar() {
  const formulario = document.querySelector("#formularioEjercicio");
  formulario.addEventListener("submit", checkForm);
  putInfo();
}

window.onload = onIniciar();
