class Game {

    private readonly canvas: Canvas;
    private readonly player: Entity;
    private readonly zombie: Entity;

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
        this.player = new Entity(canvasElement, "./assets/images/Zombies/4ZombieFrontSPAWN.png", 200, 200);
        this.zombie = new Entity(canvasElement, "./assets/images/player.png", 100, 100);
        console.log('in game constructor');
        // this.drawPlayer();
        this.startGame();
        // this.drawZombie();

    }

    public startGame(){
        setInterval(()=>{
            this.canvas.clearCanvas();
            this.player.drawPlayer();
            this.zombie.drawZombie();
            this.player.MovePlayer();
        },30)  
    }

//     public drawPlayer(){
 
//     }

//     public drawZombie() {
//     this.zombie.drawZombie();
// }
}

window.addEventListener('load', init);

function init(): void {
    const ZombieGame = new Game();
}

