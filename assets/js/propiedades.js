var propiedades = [
    {
        "id":1,
        "nombre":"Casa en la Playa",
        "ubicacion":"Miramar",
        "precio":"Money",
        "mt2":85,
        "descripcion":"Playa privada con vistas al oceano",
        "tipo": "Casa"
    },
    {
        "id":2,
        "nombre":"Penthouse",
        "ubicacion":"Palermo",
        "precio":"Money",
        "mt2":50,
        "descripcion":"Encima del edificio mas alto de CABA",
        "tipo": "Departamento"
    },
    {
        "id":3,
        "nombre":"Casa con cancha",
        "ubicacion":"Caballito",
        "precio":"Money",
        "mt2":100,
        "descripcion":"Casa con cancha de Footsal privada",
        "tipo": "Casa"
    },
    {
        "id":4,
        "nombre":"Resort",
        "ubicacion":"Bariloche",
        "precio":"Money",
        "mt2":85,
        "descripcion":"Perfecto para vacacionar"
    },
    {
        "id":5,
        "nombre":"Masion en Miami",
        "ubicacion":"Miami",
        "precio":"Money",
        "mt2":200,
        "descripcion":"Propiedad en el exterior muy exclusiva"
    },
    {
        "id":6,
        "nombre":"Edificio de apartamentos",
        "ubicacion":"Centro",
        "precio":"Money",
        "mt2":60,
        "descripcion":"En venta por departamento"
    },
];

function printPropiedades(propiedades) {
    var publicaionesHTML = "";
    for (var i = 0; i < propiedades.length; i++) {
        var propiedad = propiedades[i];
        publicaionesHTML += '<div id="0' + propiedad.id + '" class="publicacion" style="background-image: url(./assets/img/CasasVarias/Casa-0' + propiedad.id + '.jpg);">';
        publicaionesHTML += '<div class="overlay">';
        publicaionesHTML += '<div class="text">';
        publicaionesHTML += '<p>' + propiedad.nombre + '</p>'
        publicaionesHTML += '<p>Ubicacion: ' + propiedad.ubicacion + '</p>'
        publicaionesHTML += '<p>' + propiedad.mt2 + 'mt2</p>'
        publicaionesHTML += '<p>' + propiedad.descripcion + '</p>'
        publicaionesHTML += '</div>';
        publicaionesHTML += '</div>';
        publicaionesHTML += '</div>'
    }
    return publicaionesHTML;
}

// Llama a la función para imprimir todas las propiedades al cargar la página
document.getElementById("propiedades").innerHTML = printPropiedades(propiedades);

document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    // Obtener valores seleccionados por el usuario
    const tipoFilter = document.getElementById('select-tipo').value;
    const barrioFilter = document.getElementById('select-barrio').value;

    // Filtrar propiedades basadas en los valores seleccionados
    const propiedadesFiltradas = propiedades.filter(propiedad => {
        // Aplica los filtros
        if (tipoFilter !== 'Todos' && propiedad.tipo !== tipoFilter) {
            return false; // Si el tipo de propiedad no coincide, se descarta la propiedad
        }
        if (barrioFilter !== 'Todos' && propiedad.ubicacion !== barrioFilter) {
            return false; // Si el barrio no coincide, se descarta la propiedad
        }
        return true; // La propiedad pasa ambos filtros
    });

    // Llama a la función para imprimir las propiedades filtradas
    document.getElementById("propiedades").innerHTML = printPropiedades(propiedadesFiltradas);
});
