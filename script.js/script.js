class Sala2{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    Infinity(){
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image,0,0)
        };
        image.src = "/sala2euacho.png";
    }
}