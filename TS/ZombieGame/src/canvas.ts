class Canvas {

    private readonly canvas: HTMLCanvasElement;
    private readonly context: CanvasRenderingContext2D;

    public constructor(canvas: HTMLCanvasElement) {

    //ToDo duplicate with game
        this.canvas = canvas;
        this.canvas.width = window.innerWidth; 
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        console.log("in Canvas constructor");
    }

    public writeTextToCanvas(
        text: string,
        fontsize: number,
        xPos: number,
        yPos: number,
        color: string,
        alignment: CanvasTextAlign = "center") {

        this.context.font = `${fontsize}px Minecraft`;
        this.context.fillStyle = color;
        this.context.textAlign = alignment;
        this.context.fillText(text, xPos, yPos);
    }

    public writeImageFromFileToCanvas(
        src: string,
        xPos: number,
        yPos: number) {

        let image = new Image();
        // add the listener so the waiting will not affect the change
        image.addEventListener('load', () => {
            //this.context.clip();
            this.context.drawImage(image, xPos, yPos);
        });

        // load the source in the image.
        image.src = src;
    }
    public drawImage(
        aSrc: string,
        aXpos: number,
        aYpos: number) {

            const image = new Image();
            image.src = aSrc;
            image.onload = () => {
                this.context.drawImage(image, aXpos, aYpos);
            }       
    }

    public writeImageToCanvas(
        image: any,
        xPos: number,
        yPos: number): void {

        this.context.drawImage(image, xPos, yPos);
    }


    
    public GetCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public clearCanvas() {
        return this.context.clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
    }

    public getCanvasCenter(X: number, Y: number) {
        return { X: this.getCanvasWidth() / 2, Y: this.getCanvasHeight() / 2 };
    }

    public getCanvasWidth() {
        return this.canvas.width;
    }

    public getCanvasHeight() {
        return this.canvas.height;
    }

}