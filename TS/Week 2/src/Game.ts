class Game {
    //global attr for canvas
    //readonly attributes must be initialized in the constructor
    private readonly canvas: HTMLCanvasElement; // find the right type
    private readonly ctx: CanvasRenderingContext2D; // find the right type


    //some global player attributes
    private readonly player: string = "Player1";
    private readonly score: number = 400;
    private readonly lives: number = 3;
    private readonly highscores: Array<any>; //TODO: do not use 'any': write an interface!

    public constructor(canvasId: HTMLCanvasElement) {
        //construct all canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        //set the context of the canvas
        this.ctx = this.canvas.getContext('2d');

        this.highscores = [
            {
                playerName: 'Loek',
                score: 40000
            },
            {
                playerName: 'Daan',
                score: 34000
            },
            {
                playerName: 'Rimmert',
                score: 200
            }
        ]

        // all screens: uncomment to activate 
        this.start_screen();
        // this.level_screen();
        // this.title_screen();

    }

    //-------- Splash screen methods ------------------------------------
    /**
     * Function to initialize the splash screen
     */
    public start_screen() {
        //1. add 'Asteroids' text
        this.writeAsteroidHeading();
        //2. add 'Press to play' text
        this.writeIntroText();
        //3. add button with 'start' text
        this.writeStartButton();
        this.writeTextToCanvas(50, "#FFF", "center", `play`, this.canvas.width / 2 - 100, this.canvas.height / 1.2)
        //4. add Asteroid image
        this.drawAsteroid();
    }

    public writeAsteroidHeading() {
        //1. add 'Asteroids' text
        this.ctx.font = '150px Minecraft';
        this.ctx.fillStyle = '#FFF';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('ASTEROIDS', this.canvas.width / 2, this.canvas.height / 5);
    }

    public writeIntroText() {
        //2. add 'Press to play' text
        this.ctx.font = '50px Minecraft';
        this.ctx.fillStyle = '#FFF';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('PRESS PLAY TO START', this.canvas.width / 2, this.canvas.height / 2.5);
    }

    public writeStartButton() {
        var img = new Image();
        img.src = './assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png';
        img.addEventListener('load', () => {
            this.ctx.drawImage(img, this.canvas.width / 2 - 100, this.canvas.height / 1.2);
        })
    }

    public drawAsteroid() {
        var img2 = new Image()
        img2.src = './assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png';
        img2.addEventListener('load', () => {
            this.ctx.drawImage(img2, this.canvas.width / 2 - 50, this.canvas.height / 1.9)
        })
    }

    //-------- level screen methods -------------------------------------
    /**
     * Function to initialize the level screen
     */
    public level_screen() {
        //1. load life images
        this.loadLives();
        //2. draw current score
        this.writeTextToCanvas(50, "#FFF", "right", `score: ${this.score}`, this.canvas.width / 1.05, this.canvas.height / 15)
        //3. draw random asteroids
        this.randomAstroids()
        //4. draw player spaceship
        this.loadPlayerShip();
    }

    //1. load life images
    public loadLives() {
        var x: number = 25;
        var img = new Image();
        img.src = './assets/images/SpaceShooterRedux/PNG/UI/playerLife2_blue.png';

        for (let lives = this.lives; lives > 0; lives--) {

            img.addEventListener('load', () => {

                this.ctx.drawImage(img, this.canvas.width / x * lives, this.canvas.height / 25)
            })
        }
    }

    //2. draw current score
    //writeTextToCanvas()

    //3. draw random asteroids
    public randomAstroids() {
        for (let index = 0; index < 10; index++) {
            let image = new Image()
            let meteor = ['Brown_big1', 'Brown_big2', 'Brown_big3', 'Brown_big4', 'Brown_med1', 'Brown_med2', 'Brown_small1', 'Brown_small2', 'Brown_tiny1', 'Brown_tiny2', 'Grey_big1', 'Grey_big2', 'Grey_big3', 'Grey_big4', 'Grey_med1', 'Grey_med2', 'Grey_small1', 'Grey_small2', 'Grey_tiny1', 'Grey_tiny2']
            image.src = `./assets/images/SpaceShooterRedux/PNG/Meteors/meteor${meteor[this.randomNumber(0, meteor.length)]}.png`
            let x: number = this.randomNumber(0, this.canvas.width)
            let y: number = this.randomNumber(0, this.canvas.height)
            image.onload = () => {
                this.ctx.drawImage(image, x, y)
            }
        }
    }

    // let xcoor = this.randomNumber(50, this.canvas.width -50)
    // let ycoor = this.randomNumber(50, this.canvas.width -50)

    //4. draw player spaceship
    public loadPlayerShip() {
        var img = new Image();
        img.src = './assets/images/SpaceShooterRedux/PNG/playerShip2_blue.png';
        img.addEventListener('load', () => {
            this.ctx.drawImage(img, this.canvas.width / 2 - 100, this.canvas.height / 1.2)
        })
    }


    //-------- Title screen methods -------------------------------------

    public title_screen() {
        //1. draw your score
        this.ctx.font = "80px Minecraft";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`${this.player} score is ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 - 100);

        //2. draw all highscores
        this.ctx.font = "40px Minecraft";
        this.ctx.fillText("HIGHSCORES", this.canvas.width / 2, this.canvas.height / 2);

        let yCoord = this.canvas.height / 2;
        this.highscores.forEach((element, index) => {
            yCoord += 40;
            this.ctx.font = "20px Minecraft";
            this.ctx.fillText(`${index + 1}: ${element.playerName} - ${element.score}`, this.canvas.width / 2, yCoord);
        });
    }



    //-------Generic canvas functions ----------------------------------

    public writeTextToCanvas(fontsize: number, color: string, alignment: CanvasTextAlign, text: string, xCoordinates: number, yCoordinates: number) {
        this.ctx.font = `${fontsize}px minecraft`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinates, yCoordinates);
    }

    /**
    * Renders a random number between min and max
    * @param {number} min - minimal time
    * @param {number} max - maximal time
    */
    public randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }
}

//this will get an HTML element. I cast this element in de appropriate type using <>
let init = function () {
    const Asteroids = new Game(<HTMLCanvasElement>document.getElementById('canvas'));
};
//add loadlistener for custom font types
window.addEventListener('load', init);




