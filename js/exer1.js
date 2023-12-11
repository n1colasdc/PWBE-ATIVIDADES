function limpa_form(){
    document.getElementById('CEP').value=("");
    document.getElementById('Logradouro').value=("");
    document.getElementById('Bairro').value=("");
    document.getElementById('Cidade').value=("");
    document.getElementById('Estado').value=("");
    
}

function atualiza_campos(conteudo){
    if (!("erro" in conteudo)) {
        document.getElementById('CEP').value= (conteudo.cep);
        document.getElementById('Logradouro').value= (conteudo.logradouro);
        document.getElementById('Bairro').value= (conteudo.bairro);
        document.getElementById('Cidade').value= (conteudo.cidade);
        document.getElementById('Estado').value= (conteudo.uf);
        
    }else{
        limpa_form();
        alert("CEP não encontrado!");
    }
}

function pesquisacep(value){
    //variavel cep apenas valores decimas no caso inteiro.
    var cep = valor.replace(/\D/g,'');
    //condição de validação
    if (cep !="") {
        var valida_cep = /^[0-9]{8}$/;
        if (valida_cep.test(cep)) {
            document.getElementById('CEP').value="carregando";
            document.getElementById('Logradouo').value="carregando";
            document.getElementById('Bairro').value="carregando";
            document.getElementById('Cidade').value="carregando";
            document.getElementById('Estado').value="carregando";

            var element=  document.createElement('script');
            element.src = 'https://viacep.com.br/ws/'+cep + '/json/?callback=atualiza_campos';
            //insere script
            document.body.appendChild(element);
        }
        else{
            alert("formato de CEP invalido")
        }
    } 
    
    else{
        limpa_form();
    }

    


};