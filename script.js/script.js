const square = document.getElementById("square");
        const message = document.getElementById("message");

        const obstacles = [
            { x: 863, y: 215, width: 110, height: 70 },
            { x: 863, y: 365, width: 110, height: 70 },
            { x: 1110, y: 215, width: 110, height: 70 }
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
                    return true;
                }
            }
            message.style.display = 'none';
            return false; // Não há colisão
        }

        let posX = 0; // Posição inicial X
        let posY = 0; // Posição inicial Y
        const step = 10; // Tamanho do passo

        window.addEventListener('keydown', (e) => {
            let newX = posX;
            let newY = posY;

            switch (e.key) {
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

            // Limitar dentro da tela e verificar colisões
            if (
                newX >= 0 &&
                newX <= window.innerWidth - square.clientWidth &&
                newY >= 0 &&
                newY <= window.innerHeight - square.clientHeight &&
                !willCollide(newX, newY)
            ) {
                posX = newX;
                posY = newY;
                square.style.transform = `translate(${posX}px, ${posY}px)`;
            }
        });