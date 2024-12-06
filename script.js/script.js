const square = document.getElementById("square");
const message = document.getElementById("message");

// Definição dos obstáculos
const obstacles = [
    { x: 863, y: 215, width: 110, height: 70 },
    { x: 863, y: 365, width: 110, height: 70 },
    { x: 1110, y: 215, width: 110, height: 70 },
    { x: 605, y: 365, width: 110, height: 70 },
    { x: 1110, y: 365, width: 110, height: 70 },
    { x: 348, y: 215, width: 110, height: 70 },
    { x: 604, y: 515, width: 110, height: 70 },
    { x: 348, y: 515, width: 110, height: 70 },
    { x: 500, y: 700, width: 110, height: 70 },
    { x: 1110, y: 515, width: 110, height: 70 },
    { x: 348, y: 365, width: 110, height: 70 },
    { x: 863, y: 515, width: 110, height: 70 }
];

// Renderizar obstáculos no DOM
obstacles.forEach(obstacle => {
    const obsElement = document.createElement('div');
    obsElement.classList.add('obstacle');
    obsElement.style.width = `${obstacle.width}px`;
    obsElement.style.height = `${obstacle.height}px`;
    obsElement.style.left = `${obstacle.x}px`;
    obsElement.style.top = `${obstacle.y}px`;
    document.body.appendChild(obsElement);
});

// Função para verificar colisão
function willCollide(newX, newY) {
    for (let obstacle of obstacles) {
        if (
            newX < obstacle.x + obstacle.width &&
            newX + square.offsetWidth > obstacle.x &&
            newY < obstacle.y + obstacle.height &&
            newY + square.offsetHeight > obstacle.y
        ) {
            message.style.left = `${obstacle.x + obstacle.width / 2}px`;
            message.style.top = `${obstacle.y - 30}px`;
            message.style.display = 'block';
            return true; // Há colisão
        }
    }
    message.style.display = 'none';
    return false; // Não há colisão
}

// Movimentação do quadrado
let posX = window.innerWidth / 2 - square.offsetWidth / 2;
let posY = window.innerHeight / 2 - square.offsetHeight / 2;
const step = 10;

window.addEventListener('keydown', (e) => {
    let newX = posX;
    let newY = posY;

    switch (e.key.toLowerCase()) {
        case 'w': // Para cima
            newY -= step;
            break;
        case 's': // Para baixo
            newY += step;
            break;
        case 'a': // Para esquerda
            newX -= step;
            break;
        case 'd': // Para direita
            newX += step;
            break;
    }
 {
        posX = newX;
        posY = newY;
        square.style.transform = `translate(${posX}px, ${posY}px)`;
    }
});
