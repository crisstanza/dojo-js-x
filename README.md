# dojo-js-x

Coding Dojo JavaScript


https://crisstanza.github.io/dojo-js-x/




- Criar uma página com um campo de entrada (input do tipo texto) e um botão.

- O valor padrão do input deve ser 4 e o texto do botão, “ok”.

- Ao ser pressionado o botão “ok”, devem ocorrer as seguintes validações:
 - o valor digitado deve ser:
   - número inteiro
   - positivo
   - par e sua metade também deve ser par
   - maior ou igual a 4 e menor ou igual a 10

- Se ocorrer alguma infração das condiçōes acima, informar ao usuário o que houve

- Se não ocorrer, o programa prossegue:
  - O campo de entrada não pode mais ser alterado
  - O texto do botão passa a ser "recomeçar", e ao ser clicado, deve ocorrer um reload da pagina atual
  - Deve ser desenhada na tela uma tabela de tamanho NxN, onde N é o valor digitado no input

- Nas 4 laterais da tabela devem existir botões, um para cada célula. Exemplo: se o valor digitado for 6, existirão 24 botões (N x 4). Os botões não possuem texto.

- Cada célula da tabela deve ser exibida inicialmente de uma cor diferente, aleatória. O total de cores disponíveis é 4. O número de células de mesma cor deve ser igual. Exemplo: tabela de tamanho 4x4, deve ter 4 células de cada cor, aleatoriamente distribuídas

- Criar um manipulador de click para cada um dos botões laterais, com o seguinte comportamento:

 - quando se clica em um botão da lateral esquerda, exibir no console (console.log) “Ex”, onde x é o número da linha (começando em 0) clicada
 - quando se clica em um botão da lateral superior, exibir no console “Cx”, onde x é o número da coluna (começando em 0) clicada
 - o mesmo deve ser feito para Dx e Bx

- Logo após a exibição no console, deve ocorrer um “shift” horizontal circular nas cores das células, no sentido “para a esquerda”

- Fim do jogo:
 - critério pars fim do jogo onde o jogador perde: não há
 - onde o jogador ganha: quando existirem 4 grupos de células da mesma cor de tamanho (N/2)**2. Neste caso, deve ser exibida uma mensagem ao usuário e os botões laterais não podem mais  dispararem ações.
