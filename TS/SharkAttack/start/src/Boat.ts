///<reference path="GameItem.ts"/>

class Boat extends GameItem {

    keyboardListener: KeyBoardListener;

    public constructor (
        canvas: HTMLCanvasElement,
        imageSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number
    ) {
        super(canvas, imageSource, xCoor, yCoor, width, height);

        this.keyboardListener = new KeyBoardListener();
    }

    public move() {
        
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

    public isColliding(enemy: GameItem): boolean
    {
        if (
            // Check if boat.x is within borders of shark.x
            this.getX() < enemy.getX() + enemy.getWidth() &&
            this.getX() + this.getWidth() > enemy.getX() &&
            // Check if boat.y is within borders of shark.y
            this.getY() < enemy.getY() + enemy.getHeight() &&
            this.getY() + this.getHeight() > enemy.getY()
        ) {
            return true;
        }
        return false;
    }
}