const square = document.getElementById('square');
const message = document.getElementById('message');
let posX = window.innerWidth / 2 - 500; // posição inicial
let posY = window.innerHeight / 2 - 50; // posição inicial
const step = 20; // quantidade de movimento
let nearObstacle = false; // Flag para saber se está perto de um obstáculo

// Atualiza a posição inicial do quadrado
square.style.left = `${posX}px`;
square.style.top = `${posY}px`;

// Movimento do quadrado
window.addEventListener('keydown', (e) => {
    let newX = posX;
    let newY = posY;

    switch (e.key) {
        case 'w':
        case 'W':
            newY = Math.max(posY - step, 0); // Tenta mover para cima
            break;
        case 's':
        case 'S':
            newY = Math.min(posY + step, window.innerHeight - square.clientHeight); // Tenta mover para baixo
            break;
        case 'a':
        case 'A':
            newX = Math.max(posX - step, 0); // Tenta mover para a esquerda
            break;
        case 'd':
        case 'D':
    }})