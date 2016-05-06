var filtroPesquisa = [];

$(document).ready(function () {

    $("#btnProcurar").click(function () {
        if ($("#txtPesquisa").val() != '')
            filtrarProduto();
        else
            preencherCampos(new Produto());
    });

    $("#btnAlterarProduto").click(function () {
        if (filtroPesquisa.length > 0)
            alterarProduto(filtroPesquisa[0]);

        return false;
    });

});

function alterarProduto(p) {   
    produtos = $.map(produtos, function (prod) {
        if (prod.Codigo == p.Codigo) {
            prod.Nome = $("#txtNome").val();
            prod.Tipo = $("#ddlTipo").val();
            prod.Preco = $("#txtValor").val();
            prod.Estoque = $("#txtEstoque").val();
        }
        return prod;
    });

    console.log(produtos);
}

function filtrarProduto() {
    filtroPesquisa = produtos;
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

// function produtoAlterado() {
//     var p = new Produto();
//     p.Codigo = $("#txtCodigo").val();
//     p.Nome = $("#txtNome").val();
//     p.Tipo = $("#ddlTipo").val();
//     p.Preco = $("#txtValor").val();
//     p.Estoque = $("#txtEstoque").val();
//     return p;
// }