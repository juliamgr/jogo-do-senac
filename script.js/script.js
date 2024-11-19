const square = document.getElementById('square');
    const squareGif = document.getElementById('square-gif');

function moverPersonagem() {
    // Verifica se as teclas estão pressionadas e move o personagem
    if (movingKeys.w) {
        // Permite o movimento para cima sem bloquear completamente (não importa a colisão)
        posY = Math.max(posY - step, -210);  // Limite superior
        squareGif.src = './dimi de costa (1).gif';
    }
    if (movingKeys.s) {
        // Permite o movimento para baixo sem bloquear completamente
        posY = Math.min(posY + step, window.innerHeight - height, 200);  // Limite inferior
        squareGif.src = './didmitrinho (1).gif';
    }
    if (movingKeys.a) {
        // Permite o movimento para a esquerda sem bloquear completamente
        posX = Math.max(posX - step, -620);  // Limite esquerdo
        squareGif.src = './dimi esq.gif';
        square.style.transform = `translate(${posX}px, ${posY}px) rotateY(180deg)`;
    }
    if (movingKeys.d) {
        // Permite o movimento para a direita sem bloquear completamente
        posX = Math.min(posX + step, window.innerWidth - width, 500);  // Limite direito
        squareGif.src = './dimi dir.gif';
        square.style.transform = `translate(${posX}px, ${posY}px) rotateY(0deg)`;
    }}