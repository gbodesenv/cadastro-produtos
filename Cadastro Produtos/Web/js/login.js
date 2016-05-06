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
        if (seg.Senha == senha && seg.Usuario == login)
            {
                console.log(tela);
            $('#myModalLogin').modal('toggle');
               if(tela=='alterar'){
               console.log("1");
                    exibirAlterar();
               }
               else if(tela=='excluir'){
                   console.log("2");
                    exibirExcluir();
               }
            }
        else
            alert('Usuário ou senha inválidos');
        
            //$("#btnModalInvalido").click();
    }
    else {
        aler('Usuário ou senha inválidos');
        //$("#btnModalInvalido").click();
    }
}

function infoSeg() {
    this.Usuario = "admin";
    this.Senha = "12345";
}

function exibirAlterar() {
  $(".container").empty();       
  $(".container").load("~/../web/alterar.html");
}

function exibirExcluir() {
   $(".container").empty();       
   $(".container").load("~/../web/excluir.html");
}