
function toggleMenu(){
const menu= document.getElementById("menu");
menu.classList.toggle("active");
}

const botoes = document.querySelectorAll(".btn-adicionar");
let carrinho = [];

// 👉 função do botão

function atualizarBotao(){
    const botao = document.getElementById("finalizar");
  if (!botao) return; //evita erros caso o botão não exista

  if (carrinho.length ===0){
    botao.innerText="🛒 Finalizar Pedido";
  }else{
    botao.innerText = `🛒 Finalizar (${carrinho.length})`;
  }
  }



// 👉 adicionar item
botoes.forEach((botao) =>{
    botao.addEventListener("click", ()=>{
         const card = botao.closest(".bolo-card");

         const nome = card.querySelector(".titulo").innerText;
         const preco=card.querySelector(".preco").innerText;

         carrinho.push({nome, preco});
         atualizarBotao(); 

         console.log(carrinho);//para testar

         
    });
});

const botaoFinalizar = document.getElementById("finalizar");


if (botaoFinalizar){
    botaoFinalizar.addEventListener("click", () =>{
        if (carrinho.length ===0){
            alert("Seu carrinho está vazio");
            return;
        }
        let mensagem = "🧁 *Pedido - Elis&Lisa* \n\n";
        let total = 0;

        carrinho.forEach((item) => {
            const valor = item.preco
            .replace("R$", "")
            .replace(",", ".");

            total += Number(valor);

            mensagem += `• ${item.nome} - ${item.preco} \n`;
        });
        mensagem += `\n *Total: R$ ${total.toFixed(2)}*`;

        const telefone = "5561984251628";
        const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

        window.open(link, "_blank");


    });
}
// 👉 inicia correto


    carrinho = [];
    atualizarBotao(); //👈 ESSA LINHA É O QUE ATUALIZA 