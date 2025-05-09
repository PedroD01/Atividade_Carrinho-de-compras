let soma = 0;
let carrinho = document.getElementById('lista-produtos');
let preco_carrinho = document.getElementById('valor-total');
carrinho.innerHTML = '';
preco_carrinho.textContent = `R$${soma}`;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nome_produto = produto.split('-')[0];
    let preco = produto.split('- R$')[1];
    let quantidade = parseInt(document.getElementById('quantidade').value);
    if(quantidade <= 0){
        alert("ERRO! Favor digitar um número acima de 0 no campo Qtde.");
        return;
    }
    
    let preco_total_produto = parseInt(preco) * parseInt(quantidade);

    soma += preco_total_produto;

    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nome_produto} <span class="texto-azul">R$${preco}</span>
        </section>\n`;
    preco_carrinho.textContent = `R$${soma}`;

}
function limpar() {
    let carrinho = document.getElementById('lista-produtos');
    let preco_carrinho = document.getElementById('valor-total');
    let soma = 0;

    carrinho.innerHTML = '';
    preco_carrinho.textContent = `R$${soma}`;
    
}