$(document).ready(function () {      
    // $('input[type=number]').on('keyup', function(evt){
    //     if (evt.which != 110 ){//not a fullstop
    //         var n = parseFloat($(this).val().replace(/\,/g,''),10);
    //         $(this).val(n.toLocaleString());
    //     }
    // });
    
     $("#btnNovoProduto").click(function () {
         $(".container").empty();       
         $(".container").load("cadastrar.html");
     });
          
    $("#btnSalvarProduto").click(function () {
        if (validarForm()) {
            try {
                produtos.push(preencherEntidade()); 
                console.log(produtos);         
                alertaSucesso();
                $("#txtCodigo").val(ultimoCodigo()); 
            } catch (error) {
                alert("erro");
            }
            return false;
        }        
    });
});

function preencherEntidade() {
    var p = new Produto();
    p.Codigo = parseInt(ultimoCodigo()) + parseInt("1");
    p.Nome = $("#txtNome").val();
    p.Tipo = $("#ddlTipo").val();
    p.Preco = $("#txtValor").val();
    p.Estoque = $("#txtEstoque").val();
    return p;
}

function validarForm() {
    var arr = [];

    $(":required").each(function () {
        if ($(this).val() == '') arr.push($(this).val());
    });

    return (arr.length > 0) ? false : true;
}