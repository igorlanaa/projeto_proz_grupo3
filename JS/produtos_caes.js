const produtos = [
    {
      nome: "Ração Royal Canin Mini Yorkshire",
      imagem: "./imagens/produto1.webp",
      preco: 50.00,
    },
    {
      nome: "Brinquedo Mordedor Cachorro",
      imagem: "./imagens/produto2.jpg",
      preco: 20.00,
    },
    {
      nome: "Ração Pedigree Adultos",
      imagem: "./imagens/produto7.jpg",
      preco: 125.00,
    },
    {
      nome: "Comedouro Duplo",
      imagem: "./imagens/produto8.jpg",
      preco: 45.00,
    },
];
  
  const sectionProdutos = document.querySelector(".produtos");
  
  produtos.forEach((produto) => {
    const cardProduto = document.createElement("div");
    cardProduto.classList.add("produto");
  
    const imagemProduto = document.createElement("img");
    imagemProduto.src = produto.imagem;
    imagemProduto.alt = produto.nome;
  
    const nomeProduto = document.createElement("h3");
    nomeProduto.textContent = produto.nome;
  
    const precoProduto = document.createElement("p");
    precoProduto.textContent = `R$ ${produto.preco}`;
  
    const botaoAdicionar = document.createElement("button");
    botaoAdicionar.textContent = "Adicionar ao Carrinho";
    botaoAdicionar.addEventListener("click", function() {
      // Implementar a lógica de adicionar ao carrinho
    });
  
    cardProduto.appendChild(imagemProduto);
    cardProduto.appendChild(nomeProduto);
    cardProduto.appendChild(precoProduto);
    cardProduto.appendChild(botaoAdicionar);
  
    sectionProdutos.appendChild(cardProduto);
  });
  

  