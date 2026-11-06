// estoy aprendiendo java script

/* 
Genner Rivas
Juan Ruiz */
var mensaje = "Gracias por enviar tu informacion";

function enviarInformacion() {
    var nombre = document.forms["datos"]["name_user"].value;
    if (nombre == "") {
        alert("Por favor escribe tu nombre");
    } else {
        alert(mensaje + ", " + nombre);
    }
}

document.forms["datos"]["bt"].onclick = enviarInformacion;
