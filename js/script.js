document.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".btn-ver");
    const modal = document.getElementById("modal");

    const modalImg = document.getElementById("modalImg");
    const modalNome = document.getElementById("modalNome");
    const modalDesc = document.getElementById("modalDesc");

    const fechar = document.querySelector(".fechar");

    // abrir modal
    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            modal.style.display = "flex";

            modalImg.src = botao.dataset.img;
            modalNome.textContent = botao.dataset.nome;
            modalDesc.textContent = botao.dataset.desc;
        });
    });



    // fechar no X
    fechar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // fechar clicando fora
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});