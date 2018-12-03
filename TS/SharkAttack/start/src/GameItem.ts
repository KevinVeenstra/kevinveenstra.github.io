class GameItem {

    protected xPos: number;
    protected yPos: number;
    protected readonly height: number;
    protected readonly Width: number;
    private readonly ImgSource: string;
    private readonly canvas: Canvas;

    public constructor (
        canvas: HTMLCanvasElement,
        ImgSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number
    ) {
        this.canvas = new Canvas(canvas);
        this.ImgSource = ImgSource;
        this.xPos = xCoor;
        this.yPos = yCoor;
        this.Width = width;
        this.height = height;
    }

    public draw() {
        this.canvas.writeImageToCanvas(this.ImgSource, this.xPos, this.yPos)
    }

    public getX(): number
    {
        return this.xPos;
    }

    public getY(): number
    {
        return this.yPos;
    }

    public getWidth(): number
    {
        return this.Width;
    }

    public getHeight(): number
    {
        return this.height;
    }

}