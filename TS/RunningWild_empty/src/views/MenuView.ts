export class MenuView extends ViewBase {
    /**
     * Constructor
     * Creates the object and initializes the members
     * @param {HTMLCanvasElement} aCanvas - the canvas where to render to
     * @param aChangeViewCallback -
     */
    public constructor() {
        super();
    }

    protected RenderScreen(): void {
        const centerCoordinate = this.d_canvasHelper.GetCenter();

        //1. add 'Asteroids' text
        this.d_canvasHelper.writeTextToCanvas("Running Wild", 140, centerCoordinate.X, 150);

        //2. add 'Press to play' text
        this.d_canvasHelper.writeTextToCanvas("PRESS PLAY TO START", 40, centerCoordinate.X, centerCoordinate.Y - 20);

        //3. add button with 'start' text
        this.d_canvasHelper.writeButtonToCanvas("Play", 'StartGameCommand', this.StartGame, undefined, centerCoordinate.Y + 200);

        // 4. add image
        this.d_canvasHelper.writeImageFromFileToCanvas(
            "./assets/images/Player1.png",
            centerCoordinate.X - 50,
            centerCoordinate.Y + 40
        );
        this.d_canvasHelper.writeImageFromFileToCanvas(
            "./assets/images/Player1.png",
            centerCoordinate.X - 20,
            centerCoordinate.Y + 40
        );
        this.d_canvasHelper.writeImageFromFileToCanvas(
            "./assets/images/Player1.png",
            centerCoordinate.X + 10,
            centerCoordinate.Y + 40
        );
        this.d_canvasHelper.writeImageFromFileToCanvas(
            "./assets/images/Player1.png",
            centerCoordinate.X + 40,
            centerCoordinate.Y + 40
        );
        this.d_canvasHelper.writeImageFromFileToCanvas(
            "./assets/images/Player1.png",
            centerCoordinate.X - 50,
            centerCoordinate.Y + 80
        );
        this.d_canvasHelper.writeImageFromFileToCanvas(
            "./assets/images/Player1.png",
            centerCoordinate.X - 20,
            centerCoordinate.Y + 80
        );
        this.d_canvasHelper.writeImageFromFileToCanvas(
            "./assets/images/Player1.png",
            centerCoordinate.X + 10,
            centerCoordinate.Y + 80
        );
        this.d_canvasHelper.writeImageFromFileToCanvas(
            "./assets/images/Player1.png",
            centerCoordinate.X + 40,
            centerCoordinate.Y + 80
        );
        this.d_canvasHelper.writeImageFromFileToCanvas(
            "./assets/images/Player1.png",
            centerCoordinate.X - 50,
            centerCoordinate.Y + 120
        );
        this.d_canvasHelper.writeImageFromFileToCanvas(
            "./assets/images/Player1.png",
            centerCoordinate.X - 20,
            centerCoordinate.Y + 120
        );
        this.d_canvasHelper.writeImageFromFileToCanvas(
            "./assets/images/Player1.png",
            centerCoordinate.X + 10,
            centerCoordinate.Y + 120
        );
        this.d_canvasHelper.writeImageFromFileToCanvas(
            "./assets/images/Player1.png",
            centerCoordinate.X + 40,
            centerCoordinate.Y + 120
        );
    }

    private StartGame = (): void => {
        // get the centerCoordinate
        const center = this.d_canvasHelper.GetCenter();

        this.d_canvasHelper.ChangeView(new GameView());
    }

    /**
     * Cleanup
     * @AccessModifier {protected}
     * handles the cleanup and deregistration of created method callbacks
     */
    protected Cleanup(): void {
        this.d_canvasHelper.UnregisterClickListener('StartGameCommand');
    }

}
