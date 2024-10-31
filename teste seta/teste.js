 const square = document.getElementById("square");
    let posX = window.innerWidth /  -2; // posição inicial
    let posY = window.innerHeight /  -10; // posição inicial
    const step = 7; // quantidade de movimento

    // Atualiza a posição inicial do quadrado
    //square.style.color = "red";//'translate(${posX}px, ${posY}px)';
    console.log(square);

    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'w':
                posY = Math.max(posY - step, ); // limite superior
                break;
            case 's':
                posY = Math.min(posY + step, window.innerHeight - square.clientHeight); // limite inferior
                break;
            case 'a':
                posX = Math.max(posX - step, ); // limite esquerdo
                break;
            case 'd':
                posX = Math.min(posX + step, window.innerWidth - square.clientWidth); // limite direito
                break;
        }
        // Atualiza a posição do quadrado
        square.style.transform = `translate(${posX}px, ${posY}px)`;
    });