includeHTML()

function includeHTML() {
    var name, element, file, xhttp;

    name = document.getElementsByClassName("*");

    for (let i = 0; i < name.length; i++) {
        element = name[i];
        file = element.getAttribute("include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {element.innerHTML = this.responseText;}
                    if (this.status == 400) {element.innerHTML = "Page not found";}
                    element.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}