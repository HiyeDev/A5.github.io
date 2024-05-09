
//UPPER MENU
document.addEventListener("DOMContentLoaded" , function() {
    var upperMenu = document.getElementById("upperMenu");

    fetch("https://hiyedev.github.io/A5.github.io/web/components/upperMenu/view/upperMenu.html")
    .then(response => response.text())
    .then(data => {
        upperMenu.innerHTML = data;
    })
    .catch(error => {
        console.error("Error al cargar el archivo" , error)
    })
})
