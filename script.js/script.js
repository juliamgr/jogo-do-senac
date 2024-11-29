const square = document.getElementById("square");
const mesas = document.querySelectorAll(".mesa");
const message = document.getElementById("message");
const obstacles = [
    { x: 100, y: 150, width: 50, height: 50 },
    { x: 300, y: 400, width: 80, height: 80 },
    { x: 600, y: 200, width: 100, height: 100 }
];

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

    if (nearObstacle) {
        // Redireciona para outra sala (página)
        window.location.href = "https://www.google.com/search?sca_esv=a30db985f4ecea9c&rlz=1C1GCEU_pt-BRBR1104BR1104&q=plano+cartesiano&udm=2&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmi046uB92frSWoVskpBryHTvXAcQd7vp80ISgpQqOrJlJ1fF0j5Y1X9xOSWf9RFNq36qeXngBUAhftFlUjvTHg_muA-Q7gPVPDf_lyeHHawAjqwTi5qLG5_7DhDGNGzdX84VOyOfljsUBsn14kikNN0DtIQ2JKW_1HcJZ9c4cjGCLj2fSwJuNEYpHrC5-WhUOHGbR0YA&sa=X&ved=2ahUKEwi14uKpsIGKAxUvDrkGHQoYDG4QtKgLegQIGxAB&biw=1366&bih=641&dpr=1#vhid=vr3T5izeBplGHM&vssid=mosaic"; 
    }}

    moveSquare(newX, newY);
});
