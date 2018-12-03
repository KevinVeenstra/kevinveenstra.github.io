class Game {

    private readonly canvas: Canvas;
    private readonly boat: Boat;
    public shark: Shark;
    private lives: number

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
        this.boat = new Boat(canvasElement, "./assets/images/boat.png", 10, 10, 200, 150)
        this.shark = new Shark(canvasElement, "./assets/images/shark.png", 1050, 250, 200, 150)
        console.log("in game constructor")
        this.boat.draw();
        this.shark.draw();
    }

    
    public draw = () => {
        if (this.shark !== null) {
            this.boat.move();
            this.canvas.clear();
            if (this.boat.isColliding(this.shark)) {
                this.shark = null;
            } else {
                this.shark.draw();
            }
            this.boat.draw();
        }
    }
}
window.addEventListener('load', init);

function init(): void {
    const SharkAttack = new Game();
    window.setInterval(SharkAttack.draw , 1000 / 30)
}