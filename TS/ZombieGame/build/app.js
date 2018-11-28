class Canvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        console.log("in Canvas constructor");
    }
    writeTextToCanvas(text, fontsize, xPos, yPos, color, alignment = "center") {
        this.context.font = `${fontsize}px Minecraft`;
        this.context.fillStyle = color;
        this.context.textAlign = alignment;
        this.context.fillText(text, xPos, yPos);
    }
    writeImageFromFileToCanvas(src, xPos, yPos) {
        let image = new Image();
        image.addEventListener('load', () => {
            this.context.drawImage(image, xPos, yPos);
        });
        image.src = src;
    }
    drawImage(aSrc, aXpos, aYpos) {
        const image = new Image();
        image.src = aSrc;
        image.onload = () => {
            this.context.drawImage(image, aXpos, aYpos);
        };
    }
    writeImageToCanvas(image, xPos, yPos) {
        this.context.drawImage(image, xPos, yPos);
    }
    GetCanvas() {
        return this.canvas;
    }
    clearCanvas() {
        return this.context.clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
    }
    getCanvasCenter(X, Y) {
        return { X: this.getCanvasWidth() / 2, Y: this.getCanvasHeight() / 2 };
    }
    getCanvasWidth() {
        return this.canvas.width;
    }
    getCanvasHeight() {
        return this.canvas.height;
    }
}
class Entity {
    constructor(canvas, imageSrc, xCoor, yCoor) {
        this.canvas = new Canvas(canvas);
        this.imageSrc = imageSrc;
        this.xPos = xCoor;
        this.yPos = yCoor;
    }
    drawPlayer() {
        this.canvas.writeImageFromFileToCanvas(this.imageSrc, this.xPos, this.yPos);
    }
    drawZombie() {
        this.canvas.writeImageFromFileToCanvas(this.imageSrc, this.xPos, this.yPos);
    }
}
class Game {
    constructor() {
        const canvasElement = document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
        this.player = new Entity(canvasElement, "./assets/images/Zombies/4ZombieFrontSPAWN.png", 200, 200);
        this.zombie = new Entity(canvasElement, "./assets/images/player.png", 100, 100);
        console.log('in game constructor');
        this.drawPlayer();
        this.drawZombie();
    }
    drawPlayer() {
        this.player.drawPlayer();
    }
    drawZombie() {
        this.zombie.drawZombie();
    }
}
window.addEventListener('load', init);
function init() {
    const ZombieGame = new Game();
}
class Player extends Entity {
    constructor(canvas, imageSrc, xCoor, yCoor) {
        super(canvas, imageSrc, xCoor, yCoor);
    }
}
class Zombie extends Entity {
    constructor(canvas, imageSrc, xCoor, yCoor) {
        super(canvas, imageSrc, xCoor, yCoor);
    }
}
//# sourceMappingURL=app.js.map