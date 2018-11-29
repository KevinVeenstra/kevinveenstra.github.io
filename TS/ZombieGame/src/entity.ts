class Entity {
    
    public canvas: Canvas;
    public imageSrc: string;
    public xPos: number;
    public yPos: number;
    public speed:number

    public constructor(canvas: HTMLCanvasElement, imageSrc: string, xCoor: number, yCoor: number) {
        this.canvas = new Canvas(canvas);
        this.imageSrc = imageSrc;
        this.xPos = xCoor
        this.yPos = yCoor
        this.speed = 1;
        // this.xPos = 100;
        // this.yPos = 100;
    }

    public drawPlayer() {
        this.canvas.writeImageFromFileToCanvas(this.imageSrc, this.xPos, this.yPos);
    }

    public MovePlayer() {
        document.onkeypress = (press) => {
            if (press.key == "w") {
                this.yPos = this.yPos - this.speed
            }
            if (press.key == "a") {
                this.xPos = this.xPos - this.speed
            }
            if (press.key == "s") {
                this.yPos = this.yPos + this.speed
            }
            if (press.key == "d") {
                this.xPos = this.xPos + this.speed
            }
        }
    }

    public drawZombie() {
        this.canvas.writeImageFromFileToCanvas(this.imageSrc, this.xPos, this.yPos);
    }

}