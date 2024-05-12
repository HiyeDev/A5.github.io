
var link = document.getElementsByTagName("a");

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function(event) {
        showInfo(event.target);
    });
}


 function showInfo(link) {

    if (!link) {
        return;
    }
    fetch("https://hiyedev.github.io/A5.github.io/databases/json/books.json")
    .then(response => response.json())
    .then(data => {
        const containerInfo = document.querySelector(".container-info");
        for (let i = 0; i < data.books.length; i++) {
            if (data.books[i].id == link.getAttribute('data-id')) {
                containerInfo.innerHTML = `
                    <p><span>Titulo:</span> ${data.books[i].title}</br>
                    <span>Autor:</span> ${data.books[i].author}</br>
                    <span>Puntuación:</span> ${data.books[i].puntuation}</br>
                    <span>Paginas:</span> ${data.books[i].pages}</p>
                `

                const currentUrl = window.location.href;

                window.history.pushState({}, "", currentUrl + "?id=" + link.getAttribute('data-id'));
                break;

            }
        }
    })
    .catch(error => {
        console.error("Error al cargar el archivo" , error)
    })
}