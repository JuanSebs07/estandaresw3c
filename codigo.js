// estoy aprendiendo java script

/* 
Genner Rivas
Juan Ruiz */
var mensaje = "Gracias por enviar tu informacion";

var formulario = document.forms["datos"];
var resultado = document.getElementById("mensaje-formulario");

var campos = [
    { id: "email", error: "Error: escribe un correo válido, por ejemplo nombre@correo.com." },
    { id: "nombres", error: "Error: escribe tu nombre." },
    { id: "apellidos", error: "Error: escribe tu apellido." }
];

function enviarInformacion(evento) {
    evento.preventDefault();
    var primerError = null;

    campos.forEach(function (campo) {
        var entrada = document.getElementById(campo.id);
        var textoError = document.getElementById("error-" + campo.id);
        var valido = entrada.value.trim() !== "" && entrada.checkValidity();

        if (valido) {
            textoError.textContent = "";
            entrada.removeAttribute("aria-invalid");
        } else {
            textoError.textContent = campo.error;
            entrada.setAttribute("aria-invalid", "true");
            if (primerError === null) {
                primerError = entrada;
            }
        }
    });

    if (primerError !== null) {
        resultado.textContent = "El formulario tiene errores. Corrígelos e inténtalo de nuevo.";
        primerError.focus();
    } else {
        resultado.textContent = mensaje + ", " + document.getElementById("nombres").value;
        formulario.reset();
    }
}

// Se desactivan los avisos del navegador para mostrar los mensajes propios
formulario.noValidate = true;
formulario.addEventListener("submit", enviarInformacion);
