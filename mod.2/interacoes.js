/* Interações e Funcionalidades do site */

let form = document.getElementById("formOrcamento");
let errosDiv = document.getElementById("erros");

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (validarFormulario()) {
            errosDiv.innerHTML = `<p class="sucesso">Pedido enviado com sucesso!</p>`;
            form.reset();
        }
    });
}

function validarFormulario() {
    errosDiv.innerHTML = "";

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let descricao = document.getElementById("descricao").value.trim();

    let erros = [];

    if (nome === "") erros.push("O campo <b>Nome</b> é obrigatório.");
    if (email === "") erros.push("O campo <b>E-mail</b> é obrigatório.");
    else if (!validarEmail(email)) erros.push("Digite um <b>e-mail válido</b>.");
    if (descricao === "") erros.push("O campo <b>Descrição</b> é obrigatório.");

    if (erros.length > 0) {
        errosDiv.innerHTML = erros.map(msg => `<p class="erro">${msg}</p>`).join("");
        return false;
    }

    return true;
}

function validarEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

let bannerImg = document.getElementById("bannerImg");
let trocarImgBtn = document.getElementById("trocarImgBtn");

if (trocarImgBtn && bannerImg) {
    trocarImgBtn.addEventListener("click", () => {
        bannerImg.src =
            bannerImg.src.includes("coffe_cats.png")
                ? "img/books.png"
                : "img/coffe_cats.png";
    });
}

let modoEscuroBtn = document.getElementById("modoEscuroBtn");
let body = document.body;

if (modoEscuroBtn) {
    modoEscuroBtn.addEventListener("click", () => {
        body.classList.toggle("modo-escuro");

        modoEscuroBtn.textContent =
            body.classList.contains("modo-escuro")
                ? "Aplicar Modo Claro"
                : "Aplicar Modo Escuro";
    });
}


let contador = 0;
let contadorBtn = document.getElementById("contadorBtn");
let contadorValor = document.getElementById("contadorValor");

if (!contadorValor && contadorBtn) {
    contadorValor = document.createElement("span");
    contadorValor.id = "contadorValor";
    contadorValor.style.marginLeft = "10px";
    contadorValor.textContent = "0";
    document.querySelector("nav").appendChild(contadorValor);
}

if (contadorBtn && contadorValor) {
    contadorBtn.addEventListener("click", () => {
        contador++;
        contadorValor.textContent = contador;
    });
}