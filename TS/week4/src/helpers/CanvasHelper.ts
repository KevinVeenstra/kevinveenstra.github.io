class CanvasHelper {

    public readonly canvas: HTMLCanvasElement;
    public readonly ctx: CanvasRenderingContext2D; //this was a bit tricky to find

    /**
     * constructor
     * @AccessModifier {public}
     * Clears the canvas
     * @param {HTMLCanvasElement} aCanvas - the canvas to help with
     */
    public constructor(aCanvas: HTMLCanvasElement) {
        // bind the passed argument to the local member
        this.canvas = aCanvas

        // get the context from the canvas
        this.ctx = this.canvas.getContext("2d");
    }

    /**
     * RegisterOnClick
     * @AccessModifier {public}
     * Clears the canvas
     * @param aCallBack -
     */
    public RegisterOnClick(aCallBack: (x_axis: number, y_axis: number) => void) {
        // register an event listener to handle click events
        this.canvas.addEventListener('click', (aEvent: MouseEvent) => {
            // when this event is handles call the local OnClick method.
            aCallBack(aEvent.x, aEvent.y);
        });
    }

    /**
     * Clear
     * @AccessModifier {public}
     * Clears the canvas
     */
    public Clear(): void {
        // clear the screen
        this.ctx.clearRect(0, 0, this.GetWidth(), this.GetHeight());
    }

    /**
     * GetCenter
     * @AccessModifier {public}
     * returns the center coordinate
     */
    public GetCenter(): { X: number, Y: number } {
        // return the center as a valid return
        const X: number = (this.GetWidth() / 2)
        const Y: number = (this.GetHeight() / 2)
        return { X, Y }
    }

    /**
     * GetHeight
     * @AccessModifier {public}
     * returns Height of the canvas
     */
    public GetHeight(): number {
        // return the height of te canvas
        return this.canvas.height
    }

    /**
     * GetWidth
     * @AccessModifier {public}
     * returns the Width of the canvas
     */
    public GetWidth(): number {
        // return the width of the canvas
        return this.canvas.width
    }

    /**
     * writeTextToCanvas
     * @AccessModifier {public}
     * Handles the internal redirection of the click event.
     * @param {string} text -
     * @param {number} fontSize -
     * @param {number} aXpos -
     * @param {number} aYpos -
     * @param {string} color -
     * @param {CanvasTextAlign} alignment -
     */
    public writeTextToCanvas(
        text: string,
        fontSize: number,
        aXpos: number,
        aYpos: number,
        color: string = "white",
        alignment: CanvasTextAlign = "center") {

        // copy content from the game.ts and make it error free
        {
            this.ctx.font = `${fontSize}px Minecraft`;
            this.ctx.fillStyle = color;
            this.ctx.textAlign = alignment;
            this.ctx.fillText(text, aXpos, aYpos);
        }
    }

    /**
     * writeTextToCanvas
     * @AccessModifier {public}
     * Handles the internal redirection of the click event.
     * @param {string} aSrc - the source of the resource
     * @param {number} aXpos - the x axis value of the coordinate
     * @param {number} aYpos - the y axis value of the coordinate
     */
    public writeImageToCanvas(aSrc: string, aXpos: number, aYpos: number) {
        // copy content from the game.ts and make it error free
        // keep in mind that we do not support the printing of multiple side-by-side images
        // as it does in the game.ts
        let element = document.createElement("img");
        element.src = aSrc;
        this.ctx.drawImage(element, aXpos, aYpos);
    };

    /**
     * writeButtonToCanvas
     * @AccessModifier {public}
     * Creates a button with a given text
     * @param {string} aCaption - the caption to write
     * @param {number} aXpos - the left top x position of the button
     * @param {number} aYpos - the left top y position of the button
     */
    public writeButtonToCanvas(aCaption: string, aXpos: number = -1, aYpos: number = -1) {
        let buttonImage = new Image();
        buttonImage.src = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";

        buttonImage.addEventListener("load", (): void => {
            let dx = aXpos;
            let dy = aYpos;
            // if x acxis is not set, lets center the button horizontally
            if (dx < 0) dx = (this.GetWidth() - buttonImage.width / 2);
            // if y axis is not center, lets center the button vertically
            if (dy < 0) dy = (this.GetHeight() / 2 + buttonImage.height);

            // center the text based upon the font
            let fontX = dx + ((buttonImage.width = aCaption.length - 18) / 2);
            // 1/2 fontsize + buttonborder
            // let fontY = dy = (buttonImage, dx, dy)
        });
    }
    // copy content from the game.ts and make it error free

    // adjust for the different arguments as are available in the game.ts.

}
