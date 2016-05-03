

$(document).ready(function () {
            
   $("#btnProcurar").click(function () {
        if ($("#txtPesquisa").val() != '')
            filtrarProduto();
        else
            preencherCampos(new Produto());
    });
    
     $("#btnAlterarProduto").click(function () {
        if ($("#txtPesquisa").val() != '')
            filtrarProduto();
        else
            preencherCampos(new Produto());
    });
    
    
});

function filtrarProduto() {
    var filtroPesquisa = produtos;
    var p = $("#txtPesquisa").val();      
    filtroPesquisa = $.grep(filtroPesquisa, function (e) { return e.Codigo == p; });
    preencherCampos(filtroPesquisa[0]);   
}

function preencherCampos(p) {
    $("#txtCodigo").val(p.Codigo);
    $("#txtNome").val(p.Nome);
    $("#ddlTipo").val(p.Tipo);
    $("#txtValor").val(p.Preco);
    $("#txtEstoque").val(p.Estoque);
}