

$(document).ready(function () {
    //select objeto pelo codigo
    //var result = $.grep(produtos, function(e){ return e.id == id; });
    //var codigoSelecionado;
    

    //evento para selecionar linha da tabela
    $('#tabelaExcluir').on('click', '.clickable-row', function (event) {
        $(this).addClass('active').siblings().removeClass('active');
        
        //capturar codigo da linha selecionada da tabela
        //codigoSelecionado = $("#tabelaExcluir > tbody > tr.active > th:first").text();
    });
    
    listarProdutos();
    
    $(".excluir-produto").click(function(){
        var cGrade = $(this).attr("codigo-produto");
        console.log(cGrade); 
        produtos = $.grep(produtos, function(e){ return e.Codigo != cGrade; });
        alertaSucesso();
        atualizarGradeExcluir();
    });
});

function listarProdutos() {
    $.each(produtos, function (key, p) {
        $('#tabelaExcluir > tbody').append(adicionarLinhas(p));
    });
}

function adicionarLinhas(p){   
   var linha = "<tr class='clickable-row'> " +
                "<th scope='row'>"+ p.Codigo +"</th> " +
                "<td>"+ p.Nome +"</td>"  +
                "<td>"+ p.Tipo +"</td>"  +
                "<td>"+ p.Preco +"</td>" +
                "<td>"+ p.Estoque +"</td>" +
                "<td><a href='#' class='excluir-produto'  codigo-produto='" + p.Codigo + "'><i class='glyphicon glyphicon-minus-sign' aria-hidden='true'></i></a></td>" +
            "</tr>"
    return linha;
}

function atualizarGradeExcluir(){
     $('#tabelaExcluir > tbody').empty();
     listarProdutos();
}