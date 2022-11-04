let telaInicial = document.querySelector('#telaInicial')
let inputName = document.querySelector('#inputName')
let btnGamer = document.querySelector('#btnGamer')
let telaEscolha = document.querySelector('#telaEscolha')
let imgEscolhida = document.querySelectorAll(".imgEscolhida")
let btnHelp = document.querySelector("#help");
let imgGrid = document.querySelector("#imgGrid");
let imgGridPadrao = document.querySelector("#imgGridPadrao");
let tempo = document.querySelector("#tempo");
let telaFinal = document.querySelector('#telaFinal')
const alertPlaceholder = document.getElementById('alertPlaceholder')

const alert = (message) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-warning alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
}


btnGamer.addEventListener('click', (event) =>{
    
    event.preventDefault();
   
    if(inputName.value === ""){
        alert("Digite um nome para iniciar a partida");
        return
    }

    escolherImagemBase();
    telaInicial.style.display = "none";
    telaEscolha.style.display = "flex";
   
})

function escolherImagemBase() {
    imgEscolhida.forEach((item)=>{
        item.addEventListener('click', () =>{
            const partida = new QuebraCabeca(item.id);
            partida.obterGrids();
            partida.montarGrids();
            telaEscolha.style.display = "none";
            telaPrincipal.style.display = "flex";
            jogar(partida);
        })
    })
}

function jogar(partida) {    
    tempo.innerHTML = 90;
    const posAtualizada = document.querySelectorAll('.peca')
  
    posAtualizada.forEach((item, indice) =>{
        item.addEventListener('click', () =>{
            item.classList.add('selectImg');
            partida.trocarPosicao(item.src, indice);           
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
    
    voltarBtn.addEventListener('click', ()=>{

        window.location.href = window.location.href;

    })
    
}



