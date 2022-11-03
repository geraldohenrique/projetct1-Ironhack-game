# projetct1-Ironhack-game - Quebra-Cabeça

## Objetivo

  Desenvolvimento de um game de quebra-cabeça que consiste em uma imagem dividida em 9 partes embaralhadas que o jogador deve organizar na ordem correta dentro do intervalo de 90 segundos.
  
## Ferramentas

  HTML, CSS e Javascript.
  Utilizados elementos Bootstrap;

## O jogo

### Tela inicial

  A tela inicial solicita o nome do jogador e disponibiliza o botão "Jogar" . Em caso de clique do botão "Jogar" com o nome do jogador vazio, é gerada mensagem solicitando preencher o campo com o nome.

  Ao digitar o nome e clicar no botão "Jogar", uma página para a escolha da figura do quebra-cabeça é exibida.

### Tela de Escolha do Quebra-Cabeça

  Esta página disponibiliza 3 opções de figura para gerar o quebra-cabeça. Elas seguem uma ordem crescente de dificuldade.
  As figuras estão incluídas em um elemento Bootstrap do tipo "Carousel".
  A escolha do quebra-cabeça é feita ao clicar na figura desejada. Após a escolha, a tela principal do jogo é exibida.

### Tela Principal

  A tela principal possui os seguintes elementos:

  * Título;
  * Indicadores: Tempo restante e Ajudas restantes;
  * Grid 3X3 com as peças do quebra-cabeça embaralhadas; e
  * Botão Solicitação de Ajuda.

  #### Funcionalidades

    #### Selecionar e mover peça:

      Para selecionar uma peça clique em cima dela. É possível verificar que a peça ficará destacada (aumento da transparência).

      Após selecionar uma peça, clique na posição a qual se deseja que ela seja movimentada. Uma peça trocará de lugar com a outra.

    #### Solicitar Ajuda

      Para solicitar ajuda pressione o botão "Ajuda". A imagem da figura corretamente ordenada será exibida **enquanto o botão "Ajuda" continuar pressionado**. Ao soltar o botão o grid embaralhado voltará a ser exibido.

      Esse recurso só pode ser usado duas vezes a cada partida.

  ### Tela Final

    Em caso de vitória ou derrota a tela final exibirá uma frase adequada e disponibilizará o botão "Nova Partida".

    






