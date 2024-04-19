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

function girarTriangulo(idMenu) {
    var menu = document.getElementById(idMenu);

    if (menu.style.display === "none") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    
}