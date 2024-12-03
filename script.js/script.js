const square = document.getElementById('square');
const obstacle = document.getElementById('obstacle');
const pressFButton = document.getElementById('press-f-button');
const textbox = document.getElementById('textbox');

// Function to calculate distance between two elements
function getDistance(el1, el2) {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
    const dx = rect1.left - rect2.left;
    const dy = rect1.top - rect2.top;
    return Math.sqrt(dx * dx + dy * dy);
}



    // Check distance and show button if close
    const distance = getDistance(square, obstacle);
    if (distance < 100) {
        pressFButton.hidden = false;
    } else {
        pressFButton.hidden = true;
    }
;

// Event listener for 'F' key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'f' && !pressFButton.hidden) {
        textbox.hidden = false;
        textbox.focus();
    }
});

obstacles.forEach(obstacle => {
    const obsElement = document.createElement('div');
    obsElement.classList.add('obstacle');
    obsElement.style.width = `${obstacle.width}px`;
    obsElement.style.height = `${obstacle.height}px`;
    obsElement.style.left = `${obstacle.x}px`;
    obsElement.style.top = `${obstacle.y}px`;
    document.body.appendChild(obsElement);
});

function willCollide(newX, newY) {
    for (let obstacle of obstacles) {
        if (
            newX < obstacle.x + obstacle.width &&
            newX + square.clientWidth > obstacle.x &&
            newY < obstacle.y + obstacle.height &&
            newY + square.clientHeight > obstacle.y
        ) {
            message.style.left = `${obstacle.x + obstacle.width / 2}px`;
            message.style.top = `${obstacle.y - 30}px`;
            message.style.display = 'block';
            nearObstacle = true;
            return true; // Há uma colisão
        }

    }
    message.style.display = 'none';
    nearObstacle = false;
    return false; // Não há colisão
}

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
