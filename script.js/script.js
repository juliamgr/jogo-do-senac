const square = document.getElementById('square');
        let posX = window.innerWidth / 2 - 35; // posição inicial
        let posY = window.innerHeight / 2 - 35; // posição inicial
        const step = 20; // quantidade de movimento
    
        // Atualiza a posição inicial do quadrado
        square.style.left = `${posX}px`;
    square.style.top = `${posY}px`;
    
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'w':
                    posY = Math.max(posY - step, -301); // limite superior
                    break;
                case 's':
                    posY = Math.min(posY + step, window.innerHeight - square.clientHeight); // limite inferior
                    break;
                case 'a':
                    posX = Math.max(posX - step, 100); // limite esquerdo
                    break;
                case 'd':
                    posX = Math.min(posX + step, window.innerWidth - square.clientWidth); // limite direito
                    break;
            }
            // Atualiza a posição do quadrado
            square.style.transform = `translate(${posX}px, ${posY}px)`;
            square.style.left = `${posX}px`;
        });

        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'W':
                    posY = Math.max(posY - step, -301); // limite superior
                    break;
                case 'S':
                    posY = Math.min(posY + step, window.innerHeight - square.clientHeight); // limite inferior
                    break;
                case 'A':
                    posX = Math.max(posX - step, 100); // limite esquerdo
                    break;
                case 'D':
                    posX = Math.min(posX + step, window.innerWidth - square.clientWidth); // limite direito
                    break;
            }
            // Atualiza a posição do quadrado
            square.style.transform = `translate(${posX}px, ${posY}px)`;
        });
    
        const obstacles = [
            { x: 100, y: 150, width: 50, height: 50, color: "red" },
            { x: 300, y: 400, width: 80, height: 80, color: "red" },
            { x: 600, y: 200, width: 100, height: 100, color: "red" }
        ];