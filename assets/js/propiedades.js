var propiedades = [
    {
        "nombre":"Casa 01",
        "direccion":"Dire",
        "precio":"Money",
        "descripcion":"lalalal"
    },
    {
        "nombre":"Casa 02",
        "direccion":"Dire",
        "precio":"Money",
        "descripcion":"lalalal"
    },
    {
        "nombre":"Casa 03",
        "direccion":"Dire",
        "precio":"Money",
        "descripcion":"lalalal"
    }
];

function printPropiedades(propiedades) {
    var publicaionesHTML = "";
    for (var i = 0; i < propiedades.length; i ++) {
        var propiedad = propiedades[i];
        publicaionesHTML += '<div id="04" class="publicacion" style="background-image: url(./assets/img/CasasVarias/Casa-04.jpg);">';
        publicaionesHTML += '<div class="overlay">';
        publicaionesHTML += '<div class="text">';
        publicaionesHTML += '<p>' + propiedad.nombre + '</p>'
        publicaionesHTML += '</div>';
        publicaionesHTML += '</div>';
        publicaionesHTML += '</div>'
    }
    return publicaionesHTML;
}
document.getElementById("propiedades").innerHTML = printPropiedades(propiedades)