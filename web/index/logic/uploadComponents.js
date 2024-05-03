
//UPPER MENU
document.addEventListener("DOMContentLoaded" , function() {
    var upperMenu = document.getElementById("upperMenuTest");

    fetch("../../../components/upperMenu/view/upperMenu")
    .then(response => response.text())
    .then(data => {
        upperMenu.innerHTML = data;
    })
    .catch(error => {
        console.error("Error al cargar el archivo" , error)
    })
})