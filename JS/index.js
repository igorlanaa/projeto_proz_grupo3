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
      nome: "Arranhador para Gatos",
      imagem: "./imagens/produto3.jpg",
      preco: 35.00,
    },
    {
      nome: "Mochila para gatos",
      imagem: "./imagens/produto4.jpg",
      preco: 110.00,
    },
    {
      nome: "Ração Quatree Gourmet Sem Corantes",
      imagem: "./imagens/produto5.jpg",
      preco: 105.25,
    },
    {
      nome: "Ração Seca Whiskas",
      imagem: "./imagens/produto6.jpg",
      preco: 65.25,
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
  

  