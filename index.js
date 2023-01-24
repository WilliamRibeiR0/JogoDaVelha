const player1 = 'X' //
const player2 = 'O' //
var playerTime = player1 //
var gameOver = false //

atualizaMostrador() // chamando a função mostrador criada abaixo.

function atualizaMostrador() {
  //função sendo criada.
  if (gameOver) {
    //si o valor for gameOver retornar e ignorar todo codigo abaixo.
    return
  }

  if (playTime == player1) {
    //se a vez for do player1
    var player = document.querySelectorAll('div.mostrador img')[0] //
    player.setAttribute('src', 'imagens/X.png') //
  } else {
    var player = document.querySelectorAll('div.mostrador img')[0] //
    player.setAttribute('src', 'imagens/O.png') //se a vez for do player2
  }
}
