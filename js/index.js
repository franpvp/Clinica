//Input Nombres
// Variables
const nombres = document.querySelector('#nombres');
const errorNombres = document.querySelector('#nombreInvalido');
const divFormFloating = document.querySelector('#formFloating');

const valNombres = () => {
    const texto = document.getElementById('nombres').value;
    const hayNumero = /[0-9]+/.test(texto);

    if(texto === '' || texto === null) {
        errorNombres.innerHTML = 'Por favor ingrese su primer y segundo nombre.';
        divFormFloating.classList.add("is-invalid");
        nombres.classList.add("is-invalid");
    } 
    else if((texto !== '' || texto !== null) && hayNumero) {
        errorNombres.innerHTML = "Este campo no puede contener números";
        divFormFloating.classList.add("is-invalid");
        nombres.classList.add("is-invalid")
    } else {
        divFormFloating.classList.remove("is-invalid");
        nombres.classList.remove("is-invalid")
    }
}

//Input Apellidos
// Variables
const apellidos = document.querySelector('#apellidos')
const errorApellidos = document.querySelector('#apellidoInv');
const divFormFloating2 = document.querySelector('#formFloating2');

const valApellidos = () => {
    const texto = document.getElementById('apellidos').value;
    const hayNumero = /[0-9]+/.test(texto);

    if(texto === '' || texto === null) {
        errorApellidos.innerHTML = 'Por favor ingrese apellidos.';
        divFormFloating2.classList.add("is-invalid");
        apellidos.classList.add("is-invalid");
    } else if((texto !== '' || texto !== null) && hayNumero) {
        errorApellidos.innerHTML = "Este campo no puede contener números.";
        divFormFloating2.classList.add("is-invalid");
        apellidos.classList.add("is-invalid")
    }
    else {
        divFormFloating2.classList.remove("is-invalid");
        apellidos.classList.remove("is-invalid");
    }
}

//Input Correo Electrónico
const email = document.querySelector('#email');
const msgErrorEmail = document.querySelector('#emailInv');
const divFormFloating3 = document.querySelector('#formFloating3');

const valEmail = () => {
    const texto = document.getElementById('email').value;
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if(texto === '' || texto === null) {
        console.log('Campo vacío');
        msgErrorEmail.innerHTML = "Por favor ingrese un correo electrónico";
        divFormFloating3.classList.add("is-invalid");
        email.classList.add("is-invalid");
    }
    else if(emailRegex.test(texto)) {
        console.log("Campo correcto");
        divFormFloating3.classList.remove("is-invalid");
        email.classList.remove("is-invalid");
    } else {
        console.log('Campo incorrecto');
        msgErrorEmail.innerHTML = "Por favor ingrese un correo electrónico válido.";
        divFormFloating3.classList.add("is-invalid");
        email.classList.add("is-invalid");
    }
}

//Nombre de Usuario (Se agranda el input cuando aparece el error)
const nombreUsuario = document.querySelector('#nombreUsuario');
const msgErrorUser = document.querySelector('#usuarioInv'); 
const divFormFloating4 = document.querySelector('#formFloating4');

const valUsername = () => {
    const textoUser = document.getElementById('nombreUsuario').value;
    if(textoUser === '' || textoUser === null) {
        msgErrorUser.innerHTML = 'Por favor ingrese un nombre de usuario.';
        divFormFloating4.classList.add("is-invalid");
        nombreUsuario.classList.add("is-invalid");
    } else {
        divFormFloating4.classList.remove("is-invalid");
        nombreUsuario.classList.remove("is-invalid");
    }
}


//Input Contraseña
const contraseña = document.querySelector('#contraseña');
const msgErrorPass = document.querySelector('#passInvalid'); 
const divFormFloating5 = document.querySelector('#formFloating5');

const valPass = () => {
    const textoPass = document.getElementById('contraseña').value;
    const largoTexto = textoPass.length;
    // La contraseña deberá contener al menos un número y al menos una letra en mayúscula.
    const minMayuscula = /[A-Z]+/.test(textoPass);
    const minNumero = /[0-9]+/.test(textoPass);
    //Validar cuando el texto sea vacío o nulo
    if(textoPass === '' || textoPass === null) {
        msgErrorPass.innerHTML = 'Por favor ingrese una contraseña.';
        divFormFloating5.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
    }
    //Validar que el largo del texto sea entre 6 y 18 carácteres.
    if(largoTexto >= 6 && largoTexto <= 18) {
        //Validar que el texto contenga mínimo una mayúscula y un número 
        if(minMayuscula && minNumero) {
            divFormFloating5.classList.remove("is-invalid");
            contraseña.classList.remove("is-invalid");
        } else {
            divFormFloating5.classList.add("is-invalid");
            contraseña.classList.add("is-invalid");
            msgErrorPass.innerHTML = "La contraseña debe tener al menos una letra mayúscula y un número.";
        }
    } else {
        msgErrorPass.innerHTML = "La contraseña debe tener un rango de longitud entre 6 y 18 caracteres.";
        divFormFloating5.classList.add("is-invalid");
        contraseña.classList.add("is-invalid");
    }
}

//Input Repetir Contraseña

const repContraseña = document.querySelector('#repContraseña');
const msgErrorRepPass = document.querySelector('#repPassInvalid'); 
const divFormFloating6 = document.querySelector('#formFloating6');

const valRepPass = () => {
    const textoPass = document.getElementById('contraseña').value;
    if(textoPass === '' || textoPass === null) {
        msgErrorPass.innerHTML = 'Por favor ingrese de nuevo la contraseña.';
        divFormFloating6.classList.add("is-invalid");
        repContraseña.classList.add("is-invalid");
    }
    if(contraseña.value === repContraseña.value) {
        console.log("Las contraseñas son iguales");
        divFormFloating6.classList.remove("is-invalid");
        repContraseña.classList.remove("is-invalid");
    } else {
        msgErrorRepPass.innerHTML = 'La contraseñas no coinciden.';
        divFormFloating6.classList.add("is-invalid");
        repContraseña.classList.add("is-invalid");
    }
}

// Input Fecha de Nacimiento
const fechaNacimiento = document.querySelector('#fechaNacimiento');
const msgErrorFecha = document.querySelector('#fechaInv');
const divFormFloating7 = document.querySelector('#formFloating7');

//Validar que el usuario no tenga menos de 13 años.
const valFecha = () => {
    const textoFecha = document.getElementById('fechaNacimiento').value;
    var hoy = new Date(); // 20/03/2023
    var fecNacimiento = new Date(textoFecha);
    var edad = hoy.getFullYear() - fecNacimiento.getFullYear();
    var mes = hoy.getMonth() - fecNacimiento.getMonth();

    if(mes < 0 || (mes === 0 && hoy.getDate() < fecNacimiento.getDate())) {
        edad -= 1;
        if(edad <= 13) {
            msgErrorFecha.innerHTML = "Usuario que sea menor de 13 años, no puede registrarse.";
            divFormFloating7.classList.add("is-invalid");
            fechaNacimiento.classList.add("is-invalid")
        } else {
            divFormFloating7.classList.remove("is-invalid");
            fechaNacimiento.classList.remove("is-invalid")
        }
    } else {
        if(edad <= 13) {
            msgErrorFecha.innerHTML = "Usuario que sea menor de 13 años, no puede registrarse.";
            divFormFloating7.classList.add("is-invalid");
            fechaNacimiento.classList.add("is-invalid")
        } else if(edad > 13){
            divFormFloating7.classList.remove("is-invalid");
            fechaNacimiento.classList.remove("is-invalid")
        } else {
            msgErrorFecha.innerHTML = "Por favor ingrese su fecha de nacimiento.";
            divFormFloating7.classList.add("is-invalid");
            fechaNacimiento.classList.add("is-invalid");
        }
    }
}
// Boton Limpiar Formulario
const formulario = document.querySelector('#formulario');
const limpiarFormulario = () => {
    formulario.reset();
}
