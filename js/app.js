function adicionar() {
    let produto = document.getElementById('produto').value;
    let nome_produto = produto.split('-')[0];
    let preco = produto.split('- R$')[1];
    let quantidade = document.getElementById('quantidade');
    let carrinho = document.getElementById('lista-produtos');
    let preco_carrinho = document.getElementById('valor-total');
    
    let preço_produtos = [];
    let preco_total_produto = parseInt(preco) * parseInt(quantidade.value);
    preço_produtos.push(preco_total_produto);

    let initialValue = 0;
    let soma = preço_produtos.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue); 

    carrinho.innerText += `${quantidade.value}x ${nome_produto} R$${preco}\n`;
    
    
    //console.log(preco_carrinho);
    console.log(preço_produtos);
    console.log(soma);
}
function limpar() {
    
}