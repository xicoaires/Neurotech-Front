function validar() {
        let nome = formulario.nome;
        let email = formulario.email;
        let telefone = formulario.telefone;
        let mensagem = formulario.mensagem;

        if (nome.value == "") {
            alert("Favor informar seu nome");
            nome.focus();
            return;        
        }
        if (email.value == "") {
            alert("Favor informar seu e-mail");
            email.focus();
            return;        
        }
        if (telefone.value == "") {
            alert("Favor informar seu telefone");
            telefone.focus();
            return;        
        }
        if (mensagem.value == "") {
            alert("Favor informar a mensagem");
            mensagem.focus();
            return;        
        }
        alert("Seu formulário foi enviado!");
    }   
    
    function formatar(mascara, documento){
        var i = documento.value.length;
        var saida = mascara.substring(0,1);
        var texto = mascara.substring(i)
        
        if (texto.substring(0,1) != saida){
                  documento.value += texto.substring(0,1);
        }
        
      }
