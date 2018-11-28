class Entity {
    
    public canvas: Canvas;
    public imageSrc: string;
    public xPos: number;
    public yPos: number;

    public constructor(canvas: HTMLCanvasElement, imageSrc: string, xCoor: number, yCoor: number) {
        this.canvas = new Canvas(canvas);
        this.imageSrc = imageSrc;
        this.xPos = xCoor
        this.yPos = yCoor
    }

    public drawPlayer() {
        this.canvas.writeImageFromFileToCanvas(this.imageSrc, this.xPos, this.yPos);
    }

    public drawZombie() {
        this.canvas.writeImageFromFileToCanvas(this.imageSrc, this.xPos, this.yPos);
    }

}