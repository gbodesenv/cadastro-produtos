$(document).ready(function () {
    $("#btnLogar").click(function () {
        ValidarLogin();
        return false;
    });
});

function ValidarLogin() {
    var login = $("#txtLogin").val();
    var senha = $("#txtSenha").val();

    if (login != '' && senha != '') {
        var seg = new infoSeg();
        console.log(seg);
        if (seg.Senha == senha && seg.Usuario == login)
            exibirCadastro();
        else
            $("#btnModalInvalido").click();
    }
    else {
        $("#btnModalInvalido").click();
    }
}

function infoSeg() {
    this.Usuario = "admin";
    this.Senha = "12345";
}

function exibirCadastro() {
    $(".container").empty();
    $(".container").load("cadastrar.html");
}
