document.addEventListener("DOMContentLoaded", function () {
    const carrinhoDiv = document.getElementById("carrinho");
    const carrinhoLista = document.getElementById("carrinhoLista");
    const irParaPagamentoBtn = document.getElementById("irParaPagamento");

    const botoesAdicionar = document.querySelectorAll(".adicionar-ao-carrinho");
    botoesAdicionar.forEach((botao) => {
        botao.addEventListener("click", function () {
            adicionarAoCarrinho(botao.parentElement);
        });
    });

    function adicionarAoCarrinho(produto) {
        const nomeProduto = produto.querySelector("h3").textContent;
        const novoItem = document.createElement("li");
        novoItem.textContent = nomeProduto;
        carrinhoLista.appendChild(novoItem);
    }

    irParaPagamentoBtn.addEventListener("click", function () {
        irParaPagamento();
    });

    function irParaPagamento() {
        alert("Redirecionando para a página de pagamento...");
    }
});
