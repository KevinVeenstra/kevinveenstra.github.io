///<reference path="GameItem.ts"/>

class Shark extends GameItem {

    speed: number;


    public constructor(
        canvas: HTMLCanvasElement,
        imageSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number
    ) {
        super(canvas, imageSource, xCoor, yCoor, width, height);

        this.moveRightToLeft()
    }

    public moveRightToLeft() {
        setInterval(Shark, 100 / 30)

        this.xPos -= 20;
    }
}