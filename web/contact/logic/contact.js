
function validacion() {

    required();
    telOnlyNumbers();
    emailFormat();

}

function required() {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;

    var options = document.getElementById("options").selectedIndex;

    var checkOptions = document.querySelectorAll("input[type=checkbox]:checked");

    if (name == null || lastname == null || email == null || tel == null
        || name.length == 0 || lastname.length == 0 || email.length == 0 || tel.length == 0
        || /^\s+$/.test(name) || /^\s+$/.test(lastname) || /^\s+$/.test(email) || /^\s+$/.test(tel) ) {

        alert("Todos los campos son obligatorios");
        return false;
    }

    if (options == null || options == 0) {
        alert("Debes seleccionar una opcion");
        return false;
    }

    if (checkOptions.length == 0) {
        alert("Debes seleccionar una encuesta");
        return false;
    }
}

function telOnlyNumbers() {
    var tel = document.getElementById("tel").value;
    if (isNaN(tel)) {
        alert("Solo puedes escribir numeros");
        return false;
    }
}

function emailFormat() {
    var email = document.getElementById("email").value;
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        alert("Email invalido");
        return false;
    }
}