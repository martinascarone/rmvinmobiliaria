function myFunction(cajita, propiedad ) {
    // Get the checkbox
    var checkBox = document.getElementById(cajita);
    // Get the output text
    var text = document.getElementById(propiedad);
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == false){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  };

function mostrarMenu(idMenu) {
    var menu = document.getElementById(idMenu);

    if (menu.style.display === "none") {
        menu.style.display = "flex";
      } else {
        menu.style.display = "none";
      }
    
}

function buscarPrincipal() {
  window.location.href = "./assets/subpages/propiedadesFiltro.html";
  alert("Lo llevaremos a todas nuestra publicaciones")
}