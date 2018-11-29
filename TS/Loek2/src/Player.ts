///<reference path="Entity.ts" />

class Player extends Entity {

    private _keyboardListener: KeyBoardListener;

    public constructor(
        canvas: HTMLCanvasElement,
        imageSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number
    ) {
        super(canvas, imageSource, xCoor, yCoor, width, height);

        this._keyboardListener = new KeyBoardListener();
    }

    public move() {
        if (this._keyboardListener.getLeftPressed()) {
            this._xPos -= 2;
        }
        if (this._keyboardListener.getUpPressed()) {
            this._yPos -= 2;
        }
        if (this._keyboardListener.getRightPressed()) {
            this._xPos += 2;
        }
        if (this._keyboardListener.getdownPressed()) {
            this._yPos += 2;
        }
    }

    public isColliding(enemy:Entity): boolean
    {
        if (
            // Check if player.x is within borders of zombie.x
            this.getX() < enemy.getX() + enemy.getWidth() &&
            this.getX() + this.getWidth() > enemy.getX() &&
            // Check if player.y is within borders of zombie.y
            this.getY() < enemy.getY() + enemy.getHeight() &&
            this.getY() + this.getHeight() > enemy.getY()
        ) {
            return true;
        }
        return false;
    }
}
