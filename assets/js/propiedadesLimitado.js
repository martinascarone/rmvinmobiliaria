var propiedades = [
    {
        "id":1,
        "nombre":"Casa en la Playa",
        "precio":"Money",
        "mt2":85,
        "descripcion":"Playa privada con vistas al oceano",
        "tipo": "casa",
        "modo": "alquilerYcompra",
        "ubicacion": "Caballito"
    },
    {
        "id":2,
        "nombre":"Penthouse",
        "precio":"Money",
        "mt2":50,
        "descripcion":"Encima del edificio mas alto de CABA",
        "tipo": "departamento",
        "modo": "compra",
        "ubicacion": "Palermo"
    },
    {
        "id":3,
        "nombre":"Casa con cancha",
        "precio":"Money",
        "mt2":100,
        "descripcion":"Casa con cancha de Footsal privada",
        "tipo": "casa",
        "modo": "alquiler",
        "ubicacion": "Caballito"
    },
    {
        "id":4,
        "nombre":"Resort",
        "precio":"Money",
        "mt2":85,
        "descripcion":"Perfecto para vacacionar",
        "tipo": "varios",
        "modo": "alquiler",
        "ubicacion": "Palermo"
    },
    {
        "id":5,
        "nombre":"Mansion en Miami",
        "precio":"Money",
        "mt2":200,
        "descripcion":"Propiedad en el exterior muy exclusiva",
        "tipo": "varios",
        "modo": "compra",
        "ubicacion": "Caballito"
    },
    {
        "id":6,
        "nombre":"Casa en el Bosque",
        "precio":"Money",
        "mt2":120,
        "descripcion":"Rodeada de naturaleza",
        "tipo": "casa",
        "modo": "alquiler",
        "ubicacion": "Caballito"
    },
    {
        "id":7,
        "nombre":"Departamento en la Playa",
        "precio":"Money",
        "mt2":70,
        "descripcion":"Vistas al mar",
        "tipo": "departamento",
        "modo": "alquilerYcompra",
        "ubicacion": "Caballito"
    },
    {
        "id":8,
        "nombre":"Casa en el Lago",
        "precio":"Money",
        "mt2":150,
        "descripcion":"Frente al lago Nahuel Huapi",
        "tipo": "casa",
        "modo": "compra",
        "ubicacion": "Caballito"
    },
    {
        "id":9,
        "nombre":"Loft en el Centro",
        "precio":"Money",
        "mt2":45,
        "descripcion":"Estilo moderno",
        "tipo": "departamento",
        "modo": "alquiler",
        "ubicacion": "Palermo"
    },
    {
        "id":10,
        "nombre":"Cabaña en la Montaña",
        "precio":"Money",
        "mt2":80,
        "descripcion":"Para los amantes de la naturaleza",
        "tipo": "casa",
        "modo": "compra",
        "ubicacion": "Caballito"
    },
    {
        "id":11,
        "nombre":"PH en Barrio Privado",
        "precio":"Money",
        "mt2":95,
        "descripcion":"Seguridad y comodidad",
        "tipo": "departamento",
        "modo": "compra",
        "ubicacion": "Palermo"
    },
    {
        "id":12,
        "nombre":"Apartamento cerca del Congreso",
        "precio":"Money",
        "mt2":70,
        "descripcion":"Excelente ubicación cerca del Congreso",
        "tipo": "departamento",
        "modo": "alquilerYcompra",
        "ubicacion": "Congreso"
    },
    {
        "id":13,
        "nombre":"Casa en La Boca",
        "precio":"Money",
        "mt2":120,
        "descripcion":"Encantadora casa en el barrio de La Boca",
        "tipo": "casa",
        "modo": "compra",
        "ubicacion": "La Boca"
    }
];  

function printPropiedades(propiedades, cantidad) {
    var publicaionesHTML = "";
    for (var i = 0; i < cantidad && i < propiedades.length; i++) {
        var propiedad = propiedades[i];
        publicaionesHTML += '<a href="/assets/subpages/publicacionGenerica.html?id=' + propiedad.id + 
                    '&nombre=' + encodeURIComponent(propiedad.nombre) + 
                    '&ubicacion=' + encodeURIComponent(propiedad.ubicacion) + 
                    '&mt2=' + encodeURIComponent(propiedad.mt2) + 
                    '&descripcion=' + encodeURIComponent(propiedad.descripcion) + 
                    '&tipo=' + encodeURIComponent(propiedad.tipo) + '">';
        publicaionesHTML += '<div id="' + propiedad.id + '" class="publicacion" style="background-image: url(/assets/img/CasasVarias/Casa-' + propiedad.id + '.jpg);">';
        publicaionesHTML += '<div class="overlay">';
        publicaionesHTML += '<div class="text">';
        publicaionesHTML += '<p>' + propiedad.nombre + '</p>'
        publicaionesHTML += '<p>Ubicacion: ' + propiedad.ubicacion + '</p>'
        publicaionesHTML += '<p>' + propiedad.mt2 + 'mt2</p>'
        publicaionesHTML += '<p>' + propiedad.descripcion + '</p>'
        publicaionesHTML += '</div>';
        publicaionesHTML += '</div>';
        publicaionesHTML += '</div>';
        publicaionesHTML += '</a>';
    }
    return publicaionesHTML;
}

// Llama a la función para imprimir las primeras 6 propiedades al cargar la página
document.getElementById("propiedades").innerHTML = printPropiedades(propiedades, 6);

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

    // Mostrar o ocultar el mensaje de "No hay coincidencias"
    if (propiedadesFiltradas.length === 0) {
        document.getElementById('mensaje-no-coincidencias').style.display = 'flex';
    } else {
        document.getElementById('mensaje-no-coincidencias').style.display = 'none';
    }

    // Llama a la función para imprimir las primeras 6 propiedades filtradas o el mensaje de "No hay coincidencias"
    document.getElementById("propiedades").innerHTML = printPropiedades(propiedadesFiltradas, 6);
});
