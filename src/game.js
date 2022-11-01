class QuebraCabeca{
    constructor(imgBase){
        this.imgBase = imgBase;
        this.imgSelect = [];
        this.indiceSelect = [];
        this.userName;
        this.gridPadrao = [];
    }

    obterGridPadrao(){
        switch (this.imgBase){
            case 'treewayImg':
                this.gridPadrao.push(
                    '../img/treeway/treeway01.jpg',
                    '../img/treeway/treeway02.jpg',
                    '../img/treeway/treeway03.jpg',
                    '../img/treeway/treeway04.jpg',
                    '../img/treeway/treeway05.jpg',
                    '../img/treeway/treeway06.jpg',
                    '../img/treeway/treeway07.jpg',
                    '../img/treeway/treeway08.jpg',
                    '../img/treeway/treeway09.jpg'
                )
                break;
            case 'townImg':
                this.gridPadrao.push(
                    '../img/town/town01.jpg',
                    '../img/town/town02.jpg',
                    '../img/town/town03.jpg',
                    '../img/town/town04.jpg',
                    '../img/town/town05.jpg',
                    '../img/town/town06.jpg',
                    '../img/town/town07.jpg',
                    '../img/town/town08.jpg',
                    '../img/town/town09.jpg'
                )
                break;
            case 'arabMetalImg':
                this.gridPadrao.push(
                    '../img/arabmetal/arabmetal01.jpg',
                    '../img/arabmetal/arabmetal02.jpg',
                    '../img/arabmetal/arabmetal03.jpg',
                    '../img/arabmetal/arabmetal04.jpg',
                    '../img/arabmetal/arabmetal05.jpg',
                    '../img/arabmetal/arabmetal06.jpg',
                    '../img/arabmetal/arabmetal07.jpg',
                    '../img/arabmetal/arabmetal08.jpg',
                    '../img/arabmetal/arabmetal09.jpg'
                )
                break;

        }
        return this.gridPadrao;

    }

    montarGridEmbaralhado(){
        let gridEmbaralhado = this.gridPadrao.sort(()=>{
            return Math.random() - 0.5;
        })
        console.log (gridEmbaralhado)
        let grid = document.querySelectorAll('.pos')
        gridEmbaralhado.forEach((img, i) => {
            console.log (`img: ${img} i: ${i}`)
            let pecaImg = document.createElement('img');
            pecaImg.src = img;
            pecaImg.className = 'peca'
            grid[i].appendChild(pecaImg);
            
        })

    }

    trocarPosicao(peca, indice){
        let posAtual = document.querySelectorAll('.peca');
        console.log(posAtual);
        this.imgSelect.push(peca);
        this.indiceSelect.push(indice);
        console.log(this.imgSelect)
        console.log(this.indiceSelect)
        if (this.imgSelect.length === 2){
            posAtual[this.indiceSelect[0]].src = this.imgSelect[1];
            posAtual[this.indiceSelect[1]].src = this.imgSelect[0]; 
            console.log(posAtual);
            this.imgSelect = [];
            this.indiceSelect = [];
        }
        
    }

}