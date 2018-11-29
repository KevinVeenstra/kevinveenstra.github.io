class Game {

    private readonly _canvas: Canvas;
    private readonly _player: Player;
    private _zombie1: Zombie;

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new Canvas(canvasElement);
        this._player = new Player(canvasElement, './assets/images/player.png', 100, 100, 32, 32);
        this._zombie1 = new Zombie(canvasElement, './assets/images/Zombies/4ZombieFrontSPAWN.png', 10, 10, 32, 36);
        console.log('in game constructor');
        this.draw();
    }

    public draw = () => {
        if (this._zombie1 !== null) {
            this._canvas.clear();
            this._player.move();
            if (this._player.isColliding(this._zombie1)) {
                this._zombie1 = null;
            } else {
                this._zombie1.draw();
            }
            this._player.draw();
        }
    }

}

window.addEventListener('load', init);

function init(): void {
    const ZombieGame = new Game();
    window.setInterval(ZombieGame.draw, 1000 / 30)
}
