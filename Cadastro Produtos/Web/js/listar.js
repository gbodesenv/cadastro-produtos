$(document).ready(function () {
    //capturar codigo da linha selecionada da tabela
    //$("#tabelaListar > tbody > tr.active > th:first").text();

    //evento para selecionar linha da tabela
    $('#tabelaListar').on('click', '.clickable-row', function (event) {
        $(this).addClass('active').siblings().removeClass('active');
    });

    listarProdutos();
});

function listarProdutos(novo) {
    var n = (novo === undefined) ? produtos : novo;
    
    $.each(n, function (key, p) {
        $('#tabelaListar > tbody').append(adicionarLinhas(p));
    });
}

function adicionarLinhas(p){   
   var linha = "<tr class='clickable-row'> " +
                "<th scope='row'>"+ p.Codigo +"</th> " +
                "<td>"+ p.Nome +"</td>"  +
                "<td>"+ p.Tipo +"</td>"  +
                "<td>"+ p.Preco +"</td>" +
                "<td>"+ p.Estoque +"</td>" +
            "</tr>"
    return linha;
}
