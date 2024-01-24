document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[name="email"]');
    const senhaInput = document.querySelector('input[name="senha"]');

    emailInput.addEventListener("input", validarEmail);
    senhaInput.addEventListener("input", validarSenha);

    const provedoresEmail = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com', 'aol.com', 'protonmail.com', 'zoho.com', 'gmx.com', 'yandex.ru', 'mail.ru'];

    function validarEmail() {
        const email = emailInput.value.trim();
        limparEstiloCampo(emailInput);

        if (email === "") {
            exibirDicaErro(emailInput, "Por favor, preencha o seu e-mail.");
        } else if (!validarFormatoEmail(email)) {
            exibirDicaErro(emailInput, "Formato de e-mail inválido.");
        } else if (!validarDominio(email, provedoresEmail)) {
            exibirDicaErro(emailInput, "Domínio de e-mail desconhecido. Certifique-se de incluir o domínio correto.");
        } else {
            removerDicaErro(emailInput);
            aplicarEstiloCampoSucesso(emailInput);
        }
    }

    function validarSenha() {
        const senha = senhaInput.value;
        limparEstiloCampo(senhaInput);

        if (senha === "") {
            exibirDicaErro(senhaInput, "Por favor, preencha sua senha.");
        } else if (!validarSenhaCompleta(senha)) {
            exibirDicaErro(senhaInput, "A senha deve ter pelo menos 6 caracteres, incluindo letras, números e caracteres especiais.");
        } else {
            removerDicaErro(senhaInput);
            aplicarEstiloCampoSucesso(senhaInput);
        }
    }

    form.addEventListener("submit", function (event) {
        validarEmail();
        validarSenha();

        if (document.querySelectorAll(".dica-erro").length > 0) {
            event.preventDefault();
        }
    });

    function exibirDicaErro(elemento, mensagem) {
        let dicaErro = elemento.nextElementSibling;

        if (!dicaErro || dicaErro.className !== "dica-erro") {
            dicaErro = document.createElement("div");
            dicaErro.className = "dica-erro";
            elemento.parentNode.insertBefore(dicaErro, elemento.nextSibling);
        }

        dicaErro.textContent = mensagem;
        aplicarEstiloCampoErro(elemento);
    }

    function removerDicaErro(elemento) {
        const dicaErro = elemento.nextElementSibling;

        if (dicaErro && dicaErro.className === "dica-erro") {
            dicaErro.remove();
        }
    }

    function aplicarEstiloCampoErro(elemento) {
        elemento.classList.add("campo-erro");
        elemento.classList.remove("campo-sucesso");
    }

    function aplicarEstiloCampoSucesso(elemento) {
        elemento.classList.add("campo-sucesso");
        elemento.classList.remove("campo-erro");
    }

    function limparEstiloCampo(elemento) {
        elemento.classList.remove("campo-erro");
        elemento.classList.remove("campo-sucesso");
    }

    function validarFormatoEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return regex.test(email);
    }

    function validarDominio(email, provedores) {
        const dominio = email.split("@")[1];
        return provedores.includes(dominio);
    }

    function validarSenhaCompleta(senha) {
        return senha.length >= 6 && /[a-zA-Z]/.test(senha) && /\d/.test(senha) && /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    }
});
