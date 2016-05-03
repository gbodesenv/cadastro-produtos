var filtroPesquisa = produtos;

$(document).ready(function () {
   
    $("#btnProcurar").click(function () {
        if ($("#txtPesquisa").val() != '')
            filtrarGrade();
        else{
            filtroPesquisa = produtos;
            atualizarGradeListar();
        }            
    });

});
 
function filtrarGrade() {
    var p = $("#txtPesquisa").val();
    var t = $("#ddlTipoProcura option:selected").val();

    if (t == "Nome")
        filtroPesquisa = $.grep(filtroPesquisa, function (e) { return e.Nome == p; });
    else if (t == "Tipo")
        filtroPesquisa = $.grep(filtroPesquisa, function (e) { return e.Tipo == p; });

    atualizarGradeListar();
}

function atualizarGradeListar() {
    $('#tabelaListar > tbody').empty();
    listarProdutos(filtroPesquisa);
}


