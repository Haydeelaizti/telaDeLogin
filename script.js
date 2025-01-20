function senhaValida() {
    var password = document.getElementById("senha").value;
    if (password.length < 6 ) {
        alert("Sua senha deve ter no mínimo 6 caracteres")
    }
    else if (password.length == 0) {
        alert("Digite sua senha!")
    }
    else {
        alert("Cadastro realizado")
    }
}