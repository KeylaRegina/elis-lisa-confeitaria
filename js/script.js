document.addEventListener("DOMContentLoaded", () => {

    const imagens = document.querySelectorAll(".bolo-card img");
    const modal = document.getElementById("modal");

    const modalImg = document.getElementById("modalImg");
    const modalNome = document.getElementById("modalNome");
    const modalDesc = document.getElementById("modalDesc");

    const fechar = document.querySelector(".fechar");

    // abrir modal
    imagens.forEach(img => {
        img.addEventListener("click", ()  => {
            modal.style.display = "flex";

            modalImg.src = img.src;
            modalNome.textContent = img.alt;      
            modalDesc.textContent = "";  
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

function toggleMenu(){
    document.getElementById('menu').classList.toggle("show");
}