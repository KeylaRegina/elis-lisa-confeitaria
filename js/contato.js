const btn= document.getElementById('btnWhatsapp');


btn.addEventListener('click', () =>{
   
    const nome = document.getElementById('nome').value.trim();
    const telefone= document.getElementById("telefone")?.value.trim() ||"";
    const mensagem = document.getElementById('mensagem').value.trim();

    if( !nome || mensagem.length< 5){
        alert('Preencha seu nome e descreva melhor seu pedido 😊');
        return;
    }

    const texto = `Olá! Meu nome é ${nome}📞Telefone: ${telefone}. Gostaria de fazer um pedido: ${mensagem}`;
    const numero = '5561984251628'; // <- coloque o numero da confeiteira aqui
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    
    window.open(url, '_blank');
});