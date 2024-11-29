const square = document.getElementById("square");
const mesas = document.querySelectorAll(".mesa");
const message = document.getElementById("message");

let posX = -2; // Posição inicial X
let posY = 4; // Posição inicial Y
const step = 10; // Velocidade de movimento

function moveSquare(newX, newY) {
    // Limitar movimento dentro dos limites da janela
    const maxX = window.innerWidth - square.offsetWidth;
    const maxY = window.innerHeight - square.offsetHeight;

    newX = Math.max(-690, Math.min(newX, maxX)); // Limite horizontal
    newY = Math.max(-380, Math.min(newY, maxY)); // Limite vertical

    // Verificar colisão com obstáculos
    const collided = Array.from(mesas).some((mesa) => {
        const mesaRect = mesa.getBoundingClientRect();
        const squareRect = {
            left: newX,
            right: newX + square.offsetWidth,
            top: newY,
            bottom: newY + square.offsetHeight,
        };

        return (
            squareRect.right > mesaRect.left &&
            squareRect.left < mesaRect.right &&
            squareRect.bottom > mesaRect.top &&
            squareRect.top < mesaRect.bottom
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
