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

const cpsValidos = {
  "04": "Almería",
  "23": "Jaén",
  "18": "Granada",
  "29": "Málaga",
  "14": "Córdoba",
  "41": "Sevilla",
  "11": "Cádiz",
  "21": "Huelva"
};

//Variable global con localizaciones válidas
const locValidas = [
  "CIUDAD,PROVINCIA,CP",
  "CIUDAD2,PROVINCIA2,CP2",
  "CIUDAD3,PROVINCIA3,CP3"
];

//EXP REGULARES
const regCiudad = /^[a-zA-Z\s]{1,44}$/;
const regCP = /^\d{5}$/;

//INPUTS
const inputUser = document.querySelector("#inputUser");
const inputPass = document.querySelector("#inputPassword");
const inputEmail = document.querySelector("#inputEmail");
const inputCiudad = document.querySelector("#inputCiudad");
const inputProvincia = document.querySelector("#inputProvincia");
const inputCP = document.querySelector("#inputCP");
const inputFecha = document.querySelector("#inputFechaNac");

//ZONA ERRORES
const zonaMensajesLoc = document.querySelector("#zonaMensajesLoc");
const zonaMensajesFecha = document.querySelector("#zonaMensajesFecha");

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


  console.log("Ejer 1. Método check Direccion");
  //Actualizo la zona de los mensajes de error para los campos direccion
  zonaMensajesLoc.innerHTML = "";

  let ciudad = inputCiudad.value;
  let provincia = inputProvincia.value;
  let cp = inputCP.value;

  if (
    regCiudad.test(ciudad.trim()) &&
    regCP.test(cp.trim()) &&
    provinciasValidas.find((prov) => prov.toUpperCase() === provincia.trim().toUpperCase())
  ) {
    
    //Comprobación de la validez del CP introducido por el user
    let codCP = cp.substr(0, 2);
    console.log(cpsValidos);
    if (cpsValidos[codCP] &&cpsValidos[codCP].toUpperCase() === provincia.trim().toUpperCase()) {
      let locValida = `${ciudad.trim()},${provincia.trim()},${cp.trim()}`;
      //Aniado la calle creada al array de dirValidas
      locValidas.unshift(locValida.toUpperCase());
      console.table(locValidas);

      //Aniado la informacion a localStorage
      window.localStorage.setItem("location", locValida.toUpperCase());
    }

    //Como no se especifica nada para el usuario, email y contraseña, pillo el valor de los inputs
    //y lo meto en localStorage
    const user = inputUser.value;
    const email = inputEmail.value;
    const pass = inputPass.value;
    window.localStorage.setItem("user", user.trim());
    window.localStorage.setItem("email", email.trim());
    window.localStorage.setItem("password", pass.trim());
    
  } else {
    alert("Validacion Incorrecta");

    let texto = document.createTextNode(
      "Ha habido un error de validación en los campos de localizacion"
    );
    zonaMensajesLoc.appendChild(texto);
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
  console.log("Ejer 2. Método checkYear");
  //Actualizo la zona de los mensaje de error para fecha
  zonaMensajesFecha.innerHTML = "";

  let dBirth = new Date(inputFecha.value);
  let dHoy = new Date();

  if (!dBirth.getFullYear() || dBirth.getFullYear() > dHoy.getFullYear()) {
    alert("Error en la fecha");

    let texto = document.createTextNode(
      "La fecha debe ser menor o igual a la actual"
    );
    zonaMensajesFecha.appendChild(texto);
  } else {
    //Guardo la fecha en LocalStorage
    window.localStorage.setItem("dBirth", inputFecha.value);
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
FechaNacimiento -> "dBirth"
Localizacion -> "location"
*/
const putInfo = () => {
   console.log("Ejer 3. Método putInfo");

   if (window.localStorage.getItem("user")) {
     inputUser.value = window.localStorage.getItem("user");
   }

   if (window.localStorage.getItem("pass")) {
     inputPass.value = window.localStorage.getItem("pass");
   }

   if (window.localStorage.getItem("email")) {
     inputEmail.value = window.localStorage.getItem("email");
   }

   if (window.localStorage.getItem("dBirth")) {
     inputFecha.value = window.localStorage.getItem("dBirth");
   }

   if (window.localStorage.getItem("location")) {
     const location = window.localStorage.getItem("location").split(",");

     for (var i in location) {
       switch (i) {
         case "0": {
           inputCiudad.value = location[0];
           break;
         }
         case "1": {
           inputProvincia.value = location[1];
           break;
         }
         case "2": {
           inputCP.value = location[2];
           break;
         }
       }
     }
   }
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
