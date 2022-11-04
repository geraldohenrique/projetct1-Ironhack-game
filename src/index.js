let telaInicial = document.querySelector('#telaInicial')
let inputName = document.querySelector('#inputName')
let btnGamer = document.querySelector('#btnGamer')
let telaEscolha = document.querySelector('#telaEscolha')
let imgEscolhida1 = document.querySelector("#treewayImg")
let imgEscolhida2 = document.querySelector("#townImg")
let imgEscolhida3 = document.querySelector("#arabMetalImg")
let btnHelp = document.querySelector("#help");
let imgGrid = document.querySelector("#imgGrid");
let imgGridPadrao = document.querySelector("#imgGridPadrao");
let tempo = document.querySelector("#tempo");



btnGamer.addEventListener('click', (event) =>{
    // se a função está recarregando a página, use: preventDefault()
    event.preventDefault();
   
    if(inputName.value === ""){
        alert("Digite um nome para iniciar a jogada");
        return
    }

    let userName = document.querySelector("#inputName").value;
    let titulo = document.querySelector('#tituloTelaEscolha');
    titulo.textContent = `Bem vindo(a), ${userName}!
    Escolha o seu Quebra-Cabeça:`

    telaInicial.style.display = "none";
    telaEscolha.style.display = "flex";
   
})

imgEscolhida1.addEventListener('click', (event) =>{
    telaEscolha.style.display = "none";
    telaPrincipal.style.display = "flex";
    const partida = new QuebraCabeca(imgEscolhida1.id)
    partida.obterGrids();
    partida.montarGrids();
    jogar(partida);
})

imgEscolhida2.addEventListener('click', (event) =>{
    telaEscolha.style.display = "none";
    telaPrincipal.style.display = "flex";
    const partida = new QuebraCabeca(imgEscolhida2.id)
    partida.obterGrids();
    partida.montarGrids();
    jogar(partida);
})

imgEscolhida3.addEventListener('click', (event) =>{
    telaEscolha.style.display = "none";
    telaPrincipal.style.display = "flex";
    console.log(imgEscolhida3.id);
    const partida = new QuebraCabeca(imgEscolhida3.id)
    partida.obterGrids();
    partida.montarGrids();
    jogar(partida);
})



function jogar(partida) {
    tempo.innerHTML = 90;
    const posAtualizada = document.querySelectorAll('.peca')
    
    posAtualizada.forEach((item, indice) =>{
        item.addEventListener('click', () =>{
            item.classList.add = 'selectImg';
            partida.trocarPosicao(item.src, indice)            
        })
    })
    btnHelp.addEventListener('mousedown',()=> {
        imgGrid.className = 'hide';
        imgGridPadrao.className = '';
    })
    btnHelp.addEventListener('mouseup',()=> {
        imgGrid.className = '';
        imgGridPadrao.className = 'hide';
        document.querySelector('#helps').innerHTML--;
        partida.verificarGrid();
    })
    
    const intervalId = setInterval(() =>{
        if (tempo.innerHTML <= 11){
            tempo.style.color = 'red';
        } 
        if (tempo.innerHTML <= 1){
            clearInterval(intervalId);
            partida.verificarGrid();
        }

        tempo.innerHTML--;

    }, 1000)
    
    
}



