abstract class viewBase {

    protected readonly d_canvasHelper: canvasHelper

    protected constructor(aCanvas: HTMLCanvasElement) {
        this.d_canvasHelper = new this.d_canvasHelper(aCanvas)
    }

    public render() : void;{
        this.d_canvasHelper.clear();
        this.renderScreen();
    }

        private onClick = 

}