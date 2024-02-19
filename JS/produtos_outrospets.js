const produtos = [
    {
      nome: "GAIOLA PARA CALOPSITA",
      imagem: "./imagens/produto10.jpg",
      preco: 150.00,
    },
    {
      nome: "Aquário Lester 25 Litros",
      imagem: "./imagens/produto11.jpg",
      preco: 65.00,
    },
    {
      nome: "Aquário Lester 25 Litros",
      imagem: "./imagens/produto12.webp",
      preco: 65.25,
    },
    {
        nome: "Formigueiro Artificial - Fazenda de formigas",
        imagem: "./imagens/produto13.webp",
        preco: 199.00,
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
  

  