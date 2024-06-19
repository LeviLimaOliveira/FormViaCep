function buscaCep(){
    logradouro.value = "";
    bairro.value = "";
    cid.value = "";
    uf.value = "";
    complemento.value = "";
    pais.value = 'Brasil';
    
    fetch(`https://viacep.com.br/ws/${cep.value}/json`)
        .then(function (resposta){
            return resposta.json();
        })
        .then(function (conteudo){
            logradouro.value = conteudo.logradouro;
            bairro.value = conteudo.bairro;
            cid.value = conteudo.localidade;
            uf.value = conteudo.uf;
            complemento.value = conteudo.complemento;
            pais.value = "Brasil";
        });
}