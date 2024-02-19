let carrinho = [];

function atualizarCarrinho() {
  // Limpar o carrinho na tela
  const sectionCarrinho = document.querySelector(".carrinho");
  sectionCarrinho.innerHTML = "";

  // Calcular o total do carrinho
  let total = 0;
  carrinho.forEach((produto) => {
    total += produto.preco * produto.quantidade;
  });

  // Mostrar os produtos no carrinho
  carrinho.forEach((produto) => {
    const cardProduto = document.createElement("div");
    cardProduto.classList.add("produto-carrinho");

    const imagemProduto = document.createElement("img");
    imagemProduto.src = produto.imagem;
    imagemProduto.alt = produto.nome;

    const nomeProduto = document.createElement("h3");
    nomeProduto.textContent = produto.nome;

    const precoProduto = document.createElement("p");
    precoProduto.textContent = `R$ ${produto.preco.toFixed(2)}`;

    const quantidadeProduto = document.createElement("input");
    quantidadeProduto.type = "number";
    quantidadeProduto.value = produto.quantidade;
    quantidadeProduto.min = 1;
    quantidadeProduto.addEventListener("change", function () {
      atualizarQuantidade(produto.id, parseInt(this.value));
    });

    const removerProduto = document.createElement("button");
    removerProduto.textContent = "X";
    removerProduto.addEventListener("click", function () {
      removerDoCarrinho(produto.id);
    });

    cardProduto.appendChild(imagemProduto);
    cardProduto.appendChild(nomeProduto);
    cardProduto.appendChild(precoProduto);
    cardProduto.appendChild(quantidadeProduto);
    cardProduto.appendChild(removerProduto);

    sectionCarrinho.appendChild(cardProduto);
  });

  // Atualizar o total na tela
  const totalCompra = document.querySelector(".total span");
  totalCompra.textContent = `R$ ${total.toFixed(2)}`;
}

function adicionarAoCarrinho(idProduto) {
  const produto = produtos.find((produto) => produto.id === idProduto);

  // Se o produto já estiver no carrinho, aumentar a quantidade
  if (carrinho.some((produto) => produto.id === idProduto)) {
    const indiceProduto = carrinho.findIndex((produto) => produto.id === idProduto);
    carrinho[indiceProduto].quantidade++;
  } else {
    // Adicionar o produto ao carrinho com quantidade 1
    carrinho.push({ ...produto, quantidade: 1 });
  }

  atualizarCarrinho();
}

function removerDoCarrinho(idProduto) {
  carrinho = carrinho.filter((produto) => produto.id !== idProduto);
  atualizarCarrinho();
}

function atualizarQuantidade(idProduto, novaQuantidade) {
  const indiceProduto = carrinho.findIndex((produto) => produto.id === idProduto);
  carrinho[indiceProduto].quantidade = novaQuantidade;
  atualizarCarrinho();
}

function finalizarCompra() {
  // TODO: Implementar a lógica de finalizar a compra
  // Exibir mensagem de confirmação
  // Enviar dados do carrinho para o servidor
  alert("Compra finalizada com sucesso!");
  // Limpar o carrinho
  carrinho = [];
  atualizarCarrinho();
}

export { atualizarCarrinho, adicionarAoCarrinho, removerDoCarrinho, atualizarQuantidade, finalizarCompra };
