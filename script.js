// Função chamada ao clicar no cartão (configurada via onclick no HTML)
function revelarResposta(elementoCartao) {
    // Busca a <div> com a classe "resposta" dentro do cartão que foi clicado
    const resposta = elementoCartao.querySelector('.resposta');
    // Busca o botão dentro do cartão clicado
    const botao = elementoCartao.querySelector('.btn-revelar');

    // Alterna a exibição da resposta
    if (resposta.classList.contains('oculta')) {
        // Remove a classe "oculta" para mostrar a resposta
        resposta.classList.remove('oculta');
        // Altera o texto do botão
        botao.textContent = 'Esconder';
    } else {
        // Adiciona a classe "oculta" de volta para esconder a resposta
        resposta.classList.add('oculta');
        // Restaura o texto original do botão
        botao.textContent = 'Clique para checar';
    }
}