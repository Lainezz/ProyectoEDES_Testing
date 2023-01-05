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
  /*Recogemos todos los valores correspondientes que ha escrito el usuario por parte de ciudad, provincia, código postal,
  usuario, contraseña y email
  */
  let ciudad = document.getElementById("inputCiudad").value;
  let provincia = document.getElementById("inputProvincia").value;
  let codigo_postal = document.getElementById("inputCP").value;
  let user = document.getElementById("inputUser").value;
  let pass = document.getElementById("inputPassword").value;
  let email = document.getElementById("inputEmail").value;
  /*definimos los filtros para ciudad y codigo postal*/
  let filtroPalabra1= /^[A-Za-z]{1,44}$/
  let filtroPalabra2= /[0-9]{5}$/
  let filtroEmail=/^.+@g\.educaand\.es$/
  // definimos el texto del error que se imprimirá cuando sea necesario.
  let texto_error="";
  // la variable correcto controlará que no haya errores
  let correcto=true;  
  // se ejecutará el primer filtro, sino lo pasa se añade el error
  if(filtroPalabra1.exec(ciudad)){
    // se busca la provincia añadida por el usuario entre la lista de provincias, en caso de error lo producirá
    if(provinciasValidas.find(element => element == provincia)){
      // se ejecuta el segundo filtro, sino lo pasa añade error
      if(filtroPalabra2.exec(codigo_postal)){
        // se preguntan por todos los posibles casos de código postal, en caso de cumplirse la variable correcto seguirá el true
        if(codigo_postal.charAt(0)==0 && codigo_postal.charAt(1)==4 && provincia=="Almería"){
          
        }
        else if(codigo_postal.charAt(0)==2 && codigo_postal.charAt(1)==3 && provincia=="Jaén"){
          
        }
        else if(codigo_postal.charAt(0)==1 && codigo_postal.charAt(1)==8 && provincia=="Granada"){
          
        }
        else if(codigo_postal.charAt(0)==2 && codigo_postal.charAt(1)==9 && provincia=="Málaga"){
          
        }
        else if(codigo_postal.charAt(0)==1 && codigo_postal.charAt(1)==4 && provincia=="Córdoba"){
          
        }
        else if(codigo_postal.charAt(0)==4 && codigo_postal.charAt(1)==1 && provincia=="Sevilla"){
          
        }
        else if(codigo_postal.charAt(0)==1 && codigo_postal.charAt(1)==1 && provincia=="Cádiz"){
          
        }
        else if(codigo_postal.charAt(0)==2 && codigo_postal.charAt(1)==1 && provincia=="Huelva"){
          
        }
        else{
          texto_error += "No se corresponde el código postal con la provincia </br>"
          correcto=false
        }
      }else{
        texto_error += "Código postal incorrecto </br>"
        correcto=false
      }
    }else{
      texto_error += "Provincia no existe </br>"
      correcto=false
    }
  }
  else{
    texto_error += "Ciudad no existe </br>"
    correcto=false
  }

  if(!filtroEmail.test(email)){
    texto_error += "Email invalido </br>"
    correcto = false
  }

  // en caso de que haya dado algún error, la variable correcto pasará a false para no validar el formulario
  // se imprime los errores por pantalla
  document.querySelector("p[id=error]").innerHTML = texto_error
  // si no ha ocurrido fallos, ocurrirá lo siguiente
  if(correcto==true){
    // se vacían los errores si ocurrieron antes
    document.querySelector("p[id=error]").innerHTML = ""
    // se avisa de que el registro ha sido satisfactorio
    alert("Se ha registrado correctamente")
    // se añade en mayúsculas en una misma cadena separado de comas los elementos ciudad, provincia y codigo postal
    let localizacion = ciudad.toUpperCase()+","+provincia.toUpperCase()+","+codigo_postal
    // se añaden a la localstorage junto el usuario, contraseña y email
    localStorage.setItem("location",localizacion)
    localStorage.setItem("user",user)
    localStorage.setItem("password",pass)
    localStorage.setItem("email",email)
    // se añade la nueva dirección a locValidas
    locValidas.push(localizacion)
    console.log(locValidas)
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
  // se saca la fecha del usuario
  let fecha_usuario = document.getElementById("inputDate").value;
  // se crea un objeto fecha con la fecha del usuario
  let fecha = new Date(fecha_usuario);
  // se consigue el año del usuario
  let anio_usuario = fecha.getFullYear();
  // se crea un objeto fecha con la fecha actual y se extrae el año
  let fecha_actual= new Date();
  let anio_actual = fecha_actual.getFullYear();
  // se comprueba si el año del usuario es menor a la fecha actual para validarlo, se imprimirá errores en caso de error
  // y se guardará en la localstorage la fecha.
  if(anio_usuario<anio_actual){
    localStorage.setItem("date",fecha_usuario)
    document.querySelector("p[id=error2]").innerHTML = ""
  }
  else{
    document.querySelector("p[id=error2]").innerHTML = "Año incorrecto."
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
  // se guardan en los inputs los datos obtenidos de la localstorage que hayan sido introducidos
  document.getElementById('inputUser').value=localStorage.getItem("user");
  document.getElementById('inputPassword').value=localStorage.getItem("password");
  document.getElementById('inputDate').value=localStorage.getItem("date");
  document.getElementById('inputEmail').value=localStorage.getItem("email");
  // se guarda en una variable la localización obtenida de la localstorage
  let localizacion_completa = localStorage.getItem("location");
  // se separa en un array usando las comas, y guardar los elementos separados en nuevas variables
  localizacion_completa = localizacion_completa.split(",")
  let ciudad = localizacion_completa[0]
  let provincia = localizacion_completa[1]
  let cp = localizacion_completa[2]
  // se introducen en los inputs los datos extraídos de la localización completa
  document.getElementById('inputCiudad').value=ciudad
  document.getElementById('inputProvincia').value=provincia
  document.getElementById('inputCP').value=cp
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
