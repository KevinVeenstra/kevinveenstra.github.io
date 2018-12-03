class GameItem {
    constructor(canvas, ImgSource, xCoor, yCoor, width, height) {
        this.canvas = new Canvas(canvas);
        this.ImgSource = ImgSource;
        this.xPos = xCoor;
        this.yPos = yCoor;
        this.Width = width;
        this.height = height;
    }
    draw() {
        this.canvas.writeImageToCanvas(this.ImgSource, this.xPos, this.yPos);
    }
    getX() {
        return this.xPos;
    }
    getY() {
        return this.yPos;
    }
    getWidth() {
        return this.Width;
    }
    getHeight() {
        return this.height;
    }
}
class Boat extends GameItem {
    constructor(canvas, imageSource, xCoor, yCoor, width, height) {
        super(canvas, imageSource, xCoor, yCoor, width, height);
        this.keyboardListener = new KeyBoardListener();
    }
    move() {
        if (this.keyboardListener.getUpPressed()) {
            this.yPos -= 2;
        }
        if (this.keyboardListener.getRightPressed()) {
            this.xPos += 2;
        }
        if (this.keyboardListener.getdownPressed()) {
            this.yPos += 2;
        }
    }
    isColliding(enemy) {
        if (this.getX() < enemy.getX() + enemy.getWidth() &&
            this.getX() + this.getWidth() > enemy.getX() &&
            this.getY() < enemy.getY() + enemy.getHeight() &&
            this.getY() + this.getHeight() > enemy.getY()) {
            return true;
        }
        return false;
    }
}
class Canvas {
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        console.log('in canvas constructor');
    }
    writeTextToCanvas(text, fontSize, xCoordinate, yCoordinate, color = "white", alignment = "center") {
        this.ctx.font = `${fontSize}px Arial`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    writeImageToCanvas(src, xCoordinate, yCoordinate) {
        let element = document.createElement("img");
        element.src = src;
        element.addEventListener("load", () => {
            this.ctx.drawImage(element, xCoordinate, yCoordinate);
        });
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
class Game {
    constructor() {
        this.draw = () => {
            if (this.shark !== null) {
                this.boat.move();
                this.canvas.clear();
                if (this.boat.isColliding(this.shark)) {
                    this.shark = null;
                }
                else {
                    this.shark.draw();
                }
                this.boat.draw();
            }
        };
        const canvasElement = document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
        this.boat = new Boat(canvasElement, "./assets/images/boat.png", 10, 10, 200, 150);
        this.shark = new Shark(canvasElement, "./assets/images/shark.png", 1050, 250, 200, 150);
        console.log("in game constructor");
        this.boat.draw();
        this.shark.draw();
    }
}
window.addEventListener('load', init);
function init() {
    const SharkAttack = new Game();
    window.setInterval(SharkAttack.draw, 1000 / 30);
}
class Shark extends GameItem {
    constructor(canvas, imageSource, xCoor, yCoor, width, height) {
        super(canvas, imageSource, xCoor, yCoor, width, height);
        this.moveRightToLeft();
    }
    moveRightToLeft() {
        setInterval(Shark, 100 / 30);
        this.xPos -= 20;
    }
}
class KeyBoardListener {
    constructor() {
        this.keyDownHandler = (event) => {
            if (event.keyCode == 37) {
                this.leftPressed = true;
            }
            if (event.keyCode == 38) {
                this.upPressed = true;
            }
            if (event.keyCode == 39) {
                this.rightPressed = true;
            }
            if (event.keyCode == 40) {
                this.downPressed = true;
            }
        };
        this.keyUpHandler = (event) => {
            if (event.keyCode == 37) {
                this.leftPressed = false;
            }
            if (event.keyCode == 38) {
                this.upPressed = false;
            }
            if (event.keyCode == 39) {
                this.rightPressed = false;
            }
            if (event.keyCode == 40) {
                this.downPressed = false;
            }
        };
        this.leftPressed = false;
        this.upPressed = false;
        this.rightPressed = false;
        this.downPressed = false;
        window.addEventListener("keydown", this.keyDownHandler);
        window.addEventListener("keyup", this.keyUpHandler);
    }
    getLeftPressed() {
        return this.leftPressed;
    }
    getUpPressed() {
        return this.upPressed;
    }
    getRightPressed() {
        return this.rightPressed;
    }
    getdownPressed() {
        return this.downPressed;
    }
}
//# sourceMappingURL=app.js.map