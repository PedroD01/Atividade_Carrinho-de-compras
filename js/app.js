let soma = 0;
function adicionar() {
    let produto = document.getElementById('produto').value;
    let nome_produto = produto.split('-')[0];
    let preco = produto.split('- R$')[1];
    let quantidade = document.getElementById('quantidade');
    let carrinho = document.getElementById('lista-produtos');
    let preco_carrinho = document.getElementById('valor-total');
    
    let preco_total_produto = parseInt(preco) * parseInt(quantidade.value);

    soma += preco_total_produto;

    carrinho.innerHTML = `${quantidade.value}x ${nome_produto} R$${preco}\n`;
    preco_carrinho.textContent = `R$${soma}`;

}
function limpar() {
    
}