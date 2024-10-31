document.addEventListener('keydown', function(event) {

    const key = event.key; 
    
    switch (event.key) {
    
      case "ArrowLeft":
          console.log("Left arrow!")
          break;
      case "ArrowRight":
          console.log("Right arrow!")
          break;
      case "ArrowUp":
          console.log("Up arrow!")
          break;
      case "ArrowDown":
          console.log("Down arrow!")
          break;
          
     }
});
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
context.fillStyle = 'lightgray';
context.fillRect(0, 0, 600, 400);

var x = 20;
var y = 20;

// taxa de incremento
var taxa = 10;

function desenhaCirculo(x, y, raio) {

    context.fillStyle = 'blue';
    context.beginPath();
    context.arc(x, y, raio, 0, 2 * Math.PI);
    context.fill();
}

function limpaTela() {

    context.clearRect(0, 0, 600, 400);
}

function atualizaTela() {

    limpaTela();
    desenhaCirculo(x, y, 10);
}

setInterval(atualizaTela, 20);

function leDoTeclado(evento) {
    if(evento.key == 'ArrowRight')
        x += taxa
    else if(evento.key == 'ArrowLeft')
        x -= taxa
    else if(evento.key == 'ArrowUp')
        y -= taxa
    else if(evento.key == 'ArrowDown')
        y += taxa
}

document.addEventListener('keydown', leDoTeclado)