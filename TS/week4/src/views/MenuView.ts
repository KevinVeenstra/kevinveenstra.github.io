/// <reference path="../base/ViewBase.ts"/>

class MenuView extends ViewBase
{
    /**
     * Constructor
     * Creates the object and initializes the members
     * @param {HTMLCanvasElement} aCanvas - the canvas where to render to
     * @param aChangeViewCallback -
     */
    public constructor(aCanvas : HTMLCanvasElement,aChangeViewCallback : (aNewView : ViewBase) => void ) {
        super(aCanvas,aChangeViewCallback);
    }

    protected HandleClick = (aXpos: number, aYpos: number) : void => {
        // get the centerCoordinate
        const centerCoordinate = this.d_canvasHelper.GetCenter()

        if (aXpos > centerCoordinate.X - 111 && aXpos < centerCoordinate.X + 111) {
            if (aYpos > centerCoordinate.Y + 219 && aYpos < centerCoordinate.Y + 259) {
                // clear the canvas
                this.d_canvasHelper.Clear();
                // change the View << is explained tomorrow
                this.d_changeViewCallback(new GameView(this.d_canvasHelper.canvas,this.d_changeViewCallback));
            }
        }
    }

    protected RenderScreen(): void {
        // copy and modify the code from start_screen from the game.ts
    }
    
}