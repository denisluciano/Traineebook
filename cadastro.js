

$('#simples-formulario-ajax').submit(function(e){
    e.preventDefault();
    
    if($('#enviar').val() == 'Enviando...'){
        return(false);
    }
    
    $('#enviar').val('Enviando...');
    
    $.ajax({
        url: 'valida-cadastro.php',
        type: 'post',
        dataType: 'html',
        data: {
            'metodo': $('#metodo').val(),
            'nome': $('#nome').val(),
            'email': $('#email').val(),
            'senha': $('#senha').val(),
            'senha-confirmar': $('#senha-confirmar').val()
        }
    }).done(function(data){
        
        alert(data);
        
        $('#enviar').val('Enviar dados');
        $('#metodo').val('formulario-ajax');
        $('#nome').val('');
        $('#email').val('');
        $('#senha').val('');
        $('#senha-confirmar').val('');
        
    });
    
});