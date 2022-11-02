class QuebraCabeca{
    constructor(imgBase){
        this.imgBase = imgBase;
        this.imgSelect = [];
        this.indiceSelect = [];
        this.userName;
        this.gridPadrao = [];
        this.gridEmbaralhado = [];
    }

    obterGrids(){
        let copyGridPadrao =[];
        switch (this.imgBase){
            case 'treewayImg':
                this.gridPadrao.push(
                    './img/treeway/treeway01.jpg',
                    './img/treeway/treeway02.jpg',
                    './img/treeway/treeway03.jpg',
                    './img/treeway/treeway04.jpg',
                    './img/treeway/treeway05.jpg',
                    './img/treeway/treeway06.jpg',
                    './img/treeway/treeway07.jpg',
                    './img/treeway/treeway08.jpg',
                    './img/treeway/treeway09.jpg'
                )
                copyGridPadrao =[...this.gridPadrao]
                this.gridEmbaralhado = copyGridPadrao.sort(()=>{
                    return Math.random() - 0.5;
                })
                break;
            case 'townImg':
                this.gridPadrao.push(
                    './img/town/town01.jpg',
                    './img/town/town02.jpg',
                    './img/town/town03.jpg',
                    './img/town/town04.jpg',
                    './img/town/town05.jpg',
                    './img/town/town06.jpg',
                    './img/town/town07.jpg',
                    './img/town/town08.jpg',
                    './img/town/town09.jpg'
                )
                copyGridPadrao =[...this.gridPadrao]
                this.gridEmbaralhado = copyGridPadrao.sort(()=>{
                    return Math.random() - 0.5;
                })
                break;
            case 'arabMetalImg':
                this.gridPadrao.push(
                    './img/arabmetal/arabmetal01.jpg',
                    './img/arabmetal/arabmetal02.jpg',
                    './img/arabmetal/arabmetal03.jpg',
                    './img/arabmetal/arabmetal04.jpg',
                    './img/arabmetal/arabmetal05.jpg',
                    './img/arabmetal/arabmetal06.jpg',
                    './img/arabmetal/arabmetal07.jpg',
                    './img/arabmetal/arabmetal08.jpg',
                    './img/arabmetal/arabmetal09.jpg'
                )
                copyGridPadrao =[...this.gridPadrao]
                this.gridEmbaralhado = copyGridPadrao.sort(()=>{
                    return Math.random() - 0.5;
                })
                break;

        }
        // return (this.gridPadrao, this.gridEmbaralhado);

    }

    montarGrids(){
        
        let grid1 = document.querySelectorAll('.pos')
        this.gridEmbaralhado.forEach((img, i) => {
            let pecaImg = document.createElement('img');
            pecaImg.src = img;
            pecaImg.className = 'peca';
            grid1[i].appendChild(pecaImg);
            
        })
        let grid2 = document.querySelectorAll('.posPadrao')
        this.gridPadrao.forEach((img, i) => {
            let pecaImg = document.createElement('img');
            pecaImg.src = img;
            pecaImg.className = 'pecaPadrao';
            grid2[i].appendChild(pecaImg);
            
        })
    }

    trocarPosicao(peca, indice){
        let posAtual = document.querySelectorAll('.peca');
        this.imgSelect.push(peca);
        this.indiceSelect.push(indice);
        if (this.imgSelect.length === 2){
            posAtual[this.indiceSelect[0]].src = this.imgSelect[1];
            posAtual[this.indiceSelect[1]].src = this.imgSelect[0];
            posAtual[this.indiceSelect[0]].classList.remove("selectImg");
            posAtual[this.indiceSelect[1]].classList.remove("selectImg");
            this.verificarGrid();
            this.imgSelect = [];
            this.indiceSelect = [];
        }
    }

    verificarGrid(){
        let posAtual = document.querySelectorAll('.peca');
        let posPadrao = document.querySelectorAll('.pecaPadrao');
        let matrizValidacao = [];
        let tempo = document.querySelector('#tempo').innerHTML;
        let ajudas = document.querySelector('#helps');
        console.log(tempo);
        posPadrao.forEach((item, index)=>{
            matrizValidacao.push(item.src === posAtual[index].src);
        })
        if (ajudas.innerHTML < 1){
            ajudas.style.color = 'red';
            document.querySelector('#help').className = 'hide';
        }
        if(tempo > 0 && !matrizValidacao.includes(false)){
            this.userName = document.querySelector("#inputName").value;
            let titulo = document.querySelector('#mensagemFinal');
            titulo.textContent = `Parabéns, ${this.userName}! Você conseguiu!`;
            document.querySelector('#telaPrincipal').style.display = "none";
            document.querySelector('#telaFinal').style.display = "flex";
        }else if (tempo <= 1){
            this.userName = document.querySelector("#inputName").value;
            let titulo = document.querySelector('#mensagemFinal');
            titulo.textContent = `Sentimos muito, ${this.userName}! Você não tem mais tempo.`;
            document.querySelector('#telaPrincipal').style.display = "none";
            document.querySelector('#telaFinal').style.display = "flex";
        }
    }
}