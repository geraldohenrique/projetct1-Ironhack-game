let telaInicial = document.querySelector('#telaInicial')
let inputName = document.querySelector('#inputName')
let btnGamer = document.querySelector('#btnGamer')
let telaEscolha = document.querySelector('#telaEscolha')
let imgEscolhida1 = document.querySelector("#treewayImg")
let imgEscolhida2 = document.querySelector("#townImg")
let imgEscolhida3 = document.querySelector("#arabMetalImg")



btnGamer.addEventListener('click', (event) =>{
    // se a função está recarregando a página, use: preventDefault()
    event.preventDefault();
   
    if(inputName.value === ""){
        alert("Digite um nome para iniciar a jogada");
        return
    }

    telaInicial.style.display = "none";
    telaEscolha.style.display = "flex";
   
})

imgEscolhida1.addEventListener('click', (event) =>{
    telaEscolha.style.display = "none";
    telaPrincipal.style.display = "flex";
    const partida = new QuebraCabeca(imgEscolhida1.id)
    partida.obterGridPadrao();
    partida.montarGridEmbaralhado();
})

imgEscolhida2.addEventListener('click', (event) =>{
    telaEscolha.style.display = "none";
    telaPrincipal.style.display = "flex";
    const partida = new QuebraCabeca(imgEscolhida2.id)
    partida.obterGridPadrao();
    partida.montarGridEmbaralhado();
})

imgEscolhida3.addEventListener('click', (event) =>{
    telaEscolha.style.display = "none";
    telaPrincipal.style.display = "flex";
    console.log(imgEscolhida3.id);
    const partida = new QuebraCabeca(imgEscolhida3.id)
    partida.obterGridPadrao();
    partida.montarGridEmbaralhado();
})



