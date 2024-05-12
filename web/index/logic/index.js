
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
    fetch("/databases/json/books.json")
    .then(response => response.json())
    .then(data => {
        const containerInfo = document.querySelector(".container-info");
        for (let i = 0; i < data.books.length; i++) {
            if (data.books[i].id == link.getAttribute('data-id')) {
                containerInfo.innerHTML = `
                    <p><span>Title:</span> ${data.books[i].title}</br>
                    <span>Author:</span> ${data.books[i].author}</br>
                    <span>Puntuation:</span> ${data.books[i].puntuation}</br>
                    <span>Pages:</span> ${data.books[i].pages}</p>
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