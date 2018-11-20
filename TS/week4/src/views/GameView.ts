/// <reference path="../base/ViewBase.ts"/>
/// <reference path="../views/MenuView.ts"/>

class GameView extends ViewBase
{
    //some global player attributes
    // these will not stay here
    private readonly player: string = "Player1";
    private readonly score: number = 400;
    private readonly lives: number = 3;

    public constructor(aCanvas : HTMLCanvasElement,aChangeViewCallback : (aNewView : ViewBase) => void ) {
        super(aCanvas,aChangeViewCallback);
    }

    // provide the missing content
    public RenderScreen() {

    }

    protected HandleClick() {

    }

    
}