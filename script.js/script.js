const square = document.getElementById("square");
const mesas = document.querySelectorAll(".mesa");
const message = document.getElementById("message");

let posX = window.innerWidth / 2 - 35; // Posição inicial X
let posY = window.innerHeight / 2 - 35; // Posição inicial Y
const step = 10; // Velocidade de movimento

function moveSquare(newX, newY) {
    // Limitar movimento dentro dos limites da janela
    newX = Math.max(-300, Math.min(newX, window.innerWidth - square.offsetWidth));
    newY = Math.max(-400, Math.min(newY, window.innerHeight - square.offsetHeight));

    // Verificar colisão com obstáculos
    const collided = Array.from(mesas).some((mesa) => {
        const mesaRect = mesa.getBoundingClientRect();
        return (
            newX < mesaRect.right &&
            newX + square.offsetWidth > mesaRect.left &&
            newY < mesaRect.bottom &&
            newY + square.offsetHeight > mesaRect.top
        );
    });

    if (collided) {
        message.style.display = "block";
        setTimeout(() => (message.style.display = "none"), 1000);
        return; // Impede o movimento se houver colisão
    }

    // Atualizar posição
    posX = newX;
    posY = newY;
    square.style.transform = `translate(${posX}px, ${posY}px)`;
}

window.addEventListener("keydown", (e) => {
    let newX = posX;
    let newY = posY;

    switch (e.key.toLowerCase()) {
        case "w": // Para cima
            newY -= step;
            break;
        case "s": // Para baixo
            newY += step;
            break;
        case "a": // Para a esquerda
            newX -= step;
            break;
        case "d": // Para a direita
            newX += step;
            break;
    }

    moveSquare(newX, newY);
});
