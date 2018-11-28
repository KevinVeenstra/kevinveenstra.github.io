enum GameStates {
    PAUSED,
    STOPPED,
    RUNNING
}

export class GameController {

    //region Singleton design pattern applied (only for the brave souls)
    // singleton.. because we only want one listener to handle the keys
    private static instance: GameController = null;

    public static Instance(): GameController {
        if (this.instance == null) {
            this.instance = new GameController();
        }
        return this.instance;
    }

    // end of singleton
    //endregion

    // define the private properties of the gameController
    private d_canvasHelper: CanvasHelper = CanvasHelper.Instance();

    // we need to keep track of the State of the Game
    // set default to Stopped
    private d_gameState: GameStates = GameStates.STOPPED;

    private d_score = 0;

    //region Defining all the game entities
    // we define the player object
    // DEFINE THE PLAYER

    // we define the Enimies
    // DEFINE THE ENEMIES
    // ...
    // ...
    // ...
    // ...
    // ...

    //endregion

    private constructor() {
        // INITIALIZE THE ENEMIES
    }

    //region Controlling the game state
    public Start(): void {
        // create a new game
        if (this.d_gameState == GameStates.PAUSED)
            return this.Resume();

        this.d_gameState = GameStates.RUNNING;

        this.GameLoop();
    }

    public Stop(): void {
        this.d_gameState = GameStates.STOPPED;
    }

    public Pause(): void {
        // pause a running game
        this.d_gameState = GameStates.PAUSED;
    }

    public Resume(): void {
        this.d_gameState = GameStates.RUNNING;

        // resume a paused game
        this.GameLoop();
    }

    //endregion

    //region Game loop logic
    private GameLoop = (): void => {
        // the logic for the game loop

        // begin the update
        this.d_canvasHelper.BeginUpdate();
        // clear the canvas
        // CLEAR THE CANVAS

        // DRAW THE ENEMIES
        // ...
        // ...
        // ...
        // ...

        // draw the player
        // DRAW THE PLAYER

        this.d_canvasHelper.writeTextToCanvas(`Score: ${this.d_score}`, 20, this.d_canvasHelper.GetWidth() - 150, 65, undefined, "right");

        this.d_canvasHelper.EndUpdate();
        // end of the update

        if (this.d_gameState == GameStates.RUNNING) {
            // request the next loop
            // REQUEST ANIMATION FRAME ON THIS METHOD
        }

    }
    //endregion

}
