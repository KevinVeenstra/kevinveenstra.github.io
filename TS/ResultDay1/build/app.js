var Asteroids;
(function (Asteroids) {
    class App {
        constructor(aCanvas) {
            this.d_canvasHelper = Asteroids.CanvasHelper.Instance(aCanvas);
            this.d_canvasHelper.ChangeView(new Asteroids.MenuView());
        }
    }
    Asteroids.App = App;
})(Asteroids || (Asteroids = {}));
let init = function () {
    const myGame = new Asteroids.App(document.getElementById('canvas'));
};
window.addEventListener('load', init);
var Asteroids;
(function (Asteroids) {
    class EntityBase {
        constructor() {
            this.d_canvasHelper = Asteroids.CanvasHelper.Instance();
            this.d_keyboardHelper = Asteroids.KeyboardHelper.Instance();
            this.d_Xposition = -1;
            this.d_Yposition = -1;
        }
        Update() {
            this.UpdateEntity();
        }
    }
    Asteroids.EntityBase = EntityBase;
})(Asteroids || (Asteroids = {}));
var Asteroids;
(function (Asteroids) {
    class ViewBase {
        constructor() {
            this.d_canvasHelper = Asteroids.CanvasHelper.Instance();
        }
        Render() {
            this.d_canvasHelper.Clear();
            this.RenderScreen();
        }
        BeforeExit() {
            this.Cleanup();
        }
    }
    Asteroids.ViewBase = ViewBase;
})(Asteroids || (Asteroids = {}));
var Asteroids;
(function (Asteroids) {
    let GameStates;
    (function (GameStates) {
        GameStates[GameStates["PAUSED"] = 0] = "PAUSED";
        GameStates[GameStates["STOPPED"] = 1] = "STOPPED";
        GameStates[GameStates["RUNNING"] = 2] = "RUNNING";
    })(GameStates || (GameStates = {}));
    class GameController {
        constructor() {
            this.d_canvasHelper = Asteroids.CanvasHelper.Instance();
            this.d_gameState = GameStates.STOPPED;
            this.d_player = new Asteroids.Player();
            this.d_asteroid1 = new Asteroids.Asteroid();
            this.d_entities = new Array();
            this.GameLoop = () => {
                this.d_canvasHelper.BeginUpdate();
                this.d_canvasHelper.Clear();
                this.d_entities.forEach((element) => {
                    element.Update();
                });
                this.d_canvasHelper.EndUpdate();
                if (this.d_gameState == GameStates.RUNNING) {
                    requestAnimationFrame(this.GameLoop);
                }
            };
            for (let idx = 0; idx != 100; ++idx) {
                this.d_entities.push(new Asteroids.Asteroid());
            }
            let p = new Asteroids.Player();
            p.ChangeShip('UFO', Asteroids.ShipColors.ORANGE);
            this.d_entities.push(p);
            for (let idx = 0; idx != 8; ++idx) {
            }
        }
        static Instance() {
            if (this.instance == null) {
                this.instance = new GameController();
            }
            return this.instance;
        }
        Start() {
            if (this.d_gameState == GameStates.PAUSED)
                return this.Resume();
            this.d_player.ChangeShip('UFO', Asteroids.ShipColors.ORANGE);
            this.d_gameState = GameStates.RUNNING;
            this.GameLoop();
        }
        Stop() {
            this.d_gameState = GameStates.STOPPED;
        }
        Pause() {
            this.d_gameState = GameStates.PAUSED;
        }
        Resume() {
            this.d_gameState = GameStates.RUNNING;
            this.GameLoop();
        }
    }
    GameController.instance = null;
    Asteroids.GameController = GameController;
})(Asteroids || (Asteroids = {}));
class ButtonAction {
    constructor(x, y, h, w, fn) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.fn = fn;
    }
    ExecuteIfInArea(x, y) {
        if (x > this.x && x < this.x + this.w &&
            y > this.y && y < this.y + this.h) {
            this.fn();
        }
    }
}
var Asteroids;
(function (Asteroids) {
    class Asteroid extends Asteroids.EntityBase {
        constructor() {
            super();
            this.d_image = null;
            this.d_speed = (Asteroids.MathHelper.randomNumber(1, 50)) / 25.0;
            this.d_Xposition = Asteroids.MathHelper.randomNumber(-10, this.d_canvasHelper.GetWidth());
            this.d_Yposition = Asteroids.MathHelper.randomNumber(-10, this.d_canvasHelper.GetHeight() * 3 / 4);
            let img = new Image();
            img.addEventListener('load', () => {
                this.d_image = img;
            });
            img.src = `./assets/images/SpaceShooterRedux/PNG/Meteors/${Asteroid.Images[Asteroids.MathHelper.randomNumber(0, 11)]}.png`;
        }
        UpdateEntity() {
            if (this.d_Yposition > this.d_canvasHelper.GetHeight()) {
                this.d_Xposition = Asteroids.MathHelper.randomNumber(-10, this.d_canvasHelper.GetWidth() - 50);
                this.d_Yposition = -50;
                this.d_speed = (Asteroids.MathHelper.randomNumber(1, 50)) / 25.0;
            }
            this.d_Yposition += this.d_speed;
            if (this.d_image != null)
                this.d_canvasHelper.writeImageToCanvas(this.d_image, this.d_Xposition, this.d_Yposition);
        }
    }
    Asteroid.Images = [
        'meteorBrown_big1',
        'meteorBrown_big2',
        'meteorBrown_big3',
        'meteorBrown_med1',
        'meteorBrown_med3',
        'meteorBrown_tiny1',
        'meteorBrown_tiny2',
        'meteorGrey_big1',
        'meteorGrey_big2',
        'meteorGrey_big3',
        'meteorGrey_med1',
        'meteorGrey_med2',
        'meteorGrey_tiny1',
        'meteorGrey_tiny2'
    ];
    Asteroids.Asteroid = Asteroid;
})(Asteroids || (Asteroids = {}));
var Asteroids;
(function (Asteroids) {
    let ShipColors;
    (function (ShipColors) {
        ShipColors[ShipColors["BLUE"] = 0] = "BLUE";
        ShipColors[ShipColors["GREEN"] = 1] = "GREEN";
        ShipColors[ShipColors["ORANGE"] = 2] = "ORANGE";
        ShipColors[ShipColors["RED"] = 3] = "RED";
        ShipColors[ShipColors["YELLOW"] = 4] = "YELLOW";
    })(ShipColors = Asteroids.ShipColors || (Asteroids.ShipColors = {}));
    ;
    class Player extends Asteroids.EntityBase {
        constructor() {
            super();
            this.d_image = null;
            this.d_moveUp = false;
            this.d_moveDown = false;
            this.d_moveRight = false;
            this.d_moveLeft = false;
            this.d_Xposition = this.d_canvasHelper.GetCenter().X;
            this.d_Yposition = this.d_canvasHelper.GetCenter().Y;
            this.d_keyboardHelper.addKeyDownCallback('ArrowUp', () => {
                this.d_moveUp = true;
                this.d_moveDown = false;
            });
            this.d_keyboardHelper.addKeyDownCallback('ArrowRight', () => {
                this.d_moveRight = true;
                this.d_moveLeft = false;
            });
            this.d_keyboardHelper.addKeyDownCallback('ArrowDown', () => {
                this.d_moveUp = false;
                this.d_moveDown = true;
            });
            this.d_keyboardHelper.addKeyDownCallback('ArrowLeft', () => {
                this.d_moveRight = false;
                this.d_moveLeft = true;
            });
            this.d_keyboardHelper.addKeyUpCallback('ArrowUp', () => {
                this.d_moveUp = false;
            });
            this.d_keyboardHelper.addKeyUpCallback('ArrowRight', () => {
                this.d_moveRight = false;
            });
            this.d_keyboardHelper.addKeyUpCallback('ArrowDown', () => {
                this.d_moveDown = false;
            });
            this.d_keyboardHelper.addKeyUpCallback('ArrowLeft', () => {
                this.d_moveLeft = false;
            });
        }
        ChangeShip(aShipName, aColor) {
            let img = new Image();
            let imgFile = '';
            switch (aShipName.toUpperCase()) {
                case 'UFO':
                    imgFile = `./assets/images/SpaceShooterRedux/PNG/${Player.Images[3].Ship4[aColor]}.png`;
                    break;
                case 'SHIP3':
                    imgFile = `./assets/images/SpaceShooterRedux/PNG/${Player.Images[2].Ship1[aColor]}.png`;
                    break;
                case 'SHIP2':
                    imgFile = `./assets/images/SpaceShooterRedux/PNG/${Player.Images[1].Ship2[aColor]}.png`;
                    break;
                case 'SHIP1':
                default:
                    imgFile = `./assets/images/SpaceShooterRedux/PNG/${Player.Images[0].Ship1[aColor]}.png`;
            }
            img.addEventListener('load', () => {
                this.d_image = img;
            });
            img.src = imgFile;
        }
        UpdateEntity() {
            if (this.d_moveUp || this.d_moveDown || this.d_moveRight || this.d_moveLeft) {
                if (this.d_moveUp)
                    this.d_Yposition -= 2;
                else if (this.d_moveDown)
                    this.d_Yposition += 3;
                if (this.d_moveRight)
                    this.d_Xposition += 3;
                else if (this.d_moveLeft)
                    this.d_Xposition -= 3;
            }
            if (this.d_image != null)
                this.d_canvasHelper.writeImageToCanvas(this.d_image, this.d_Xposition, this.d_Yposition);
        }
    }
    Player.Images = [{
            'Ship1': [
                'playerShip1_blue',
                'playerShip1_green',
                'playerShip1_orange',
                'playerShip1_red',
                'playerShip1_red'
            ]
        }, {
            'Ship2': [
                'playerShip2_blue',
                'playerShip2_green',
                'playerShip2_orange',
                'playerShip2_red',
                'playerShip2_red'
            ]
        }, {
            'Ship3': [
                'playerShip3_blue',
                'playerShip3_green',
                'playerShip3_orange',
                'playerShip3_red',
                'playerShip3_red'
            ]
        }, {
            'Ship4': [
                'ufoBlue',
                'ufoGreen',
                'ufoRed',
                'ufoRed',
                'ufoYellow'
            ]
        }];
    Asteroids.Player = Player;
})(Asteroids || (Asteroids = {}));
var Asteroids;
(function (Asteroids) {
    class CanvasHelper {
        constructor(aCanvas) {
            this.d_clickCommands = new Map();
            this.ChangeView = (aNewView = null) => {
                if (aNewView == null) {
                    return;
                }
                if (this.d_currentScreen != null) {
                    this.d_currentScreen.BeforeExit();
                }
                this.d_currentScreen = aNewView;
                this.d_currentScreen.Render();
            };
            this.d_canvas = aCanvas;
            this.d_canvas.width = window.innerWidth;
            this.d_canvas.height = window.innerHeight;
            this.d_context = this.d_canvas.getContext('2d');
            document.addEventListener('click', (event) => {
                this.OnClick(event);
            });
        }
        static Instance(aCanvas = null) {
            if (this.instance == null) {
                if (aCanvas == null) {
                    throw new DOMException("The first time the instance is created a Canvas must be given.");
                }
                this.instance = new CanvasHelper(aCanvas);
            }
            return this.instance;
        }
        OnClick(Event) {
            let X = Event.x;
            let Y = Event.y;
            this.d_clickCommands.forEach((value, key) => {
                value.ExecuteIfInArea(X, Y);
            });
        }
        Clear() {
            this.d_context.clearRect(0, 0, this.GetWidth(), this.GetHeight());
        }
        BeginUpdate() {
            this.d_context.save();
        }
        EndUpdate() {
            this.d_context.clip();
            this.d_context.restore();
        }
        GetCanvas() {
            return this.d_canvas;
        }
        GetCenter() {
            return { X: this.GetWidth() / 2, Y: this.GetHeight() / 2 };
        }
        GetHeight() {
            return this.d_canvas.height;
        }
        GetWidth() {
            return this.d_canvas.width;
        }
        UnregisterClickListener(fnName) {
            this.d_clickCommands.delete(fnName);
        }
        writeTextToCanvas(aText, aFontSize, aXpos, aYpos, aColor = "white", aAlignment = "center") {
            this.d_context.font = `${aFontSize}px Minecraft`;
            this.d_context.fillStyle = aColor;
            this.d_context.textAlign = aAlignment;
            this.d_context.fillText(aText, aXpos, aYpos);
        }
        writeImageFromFileToCanvas(aSrc, aXpos, aYpos) {
            let image = new Image();
            image.addEventListener('load', () => {
                this.d_context.drawImage(image, aXpos, aYpos);
            });
            image.src = aSrc;
        }
        writeImageToCanvas(aImage, aXpos, aYpos) {
            this.d_context.drawImage(aImage, aXpos, aYpos);
        }
        writeButtonToCanvas(aCaption, fnName, fn, aXpos = -1, aYpos = -1) {
            let buttonImage = new Image();
            buttonImage.src = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";
            buttonImage.addEventListener('load', () => {
                let dx = aXpos;
                let dy = aYpos;
                if (dx < 0)
                    dx = (this.GetWidth() - buttonImage.width) / 2;
                if (dy < 0)
                    dy = this.GetHeight() / 2 + buttonImage.height;
                let fontX = dx + ((buttonImage.width + aCaption.length - 18) / 2);
                let fontY = dy + (buttonImage.height - 12);
                this.d_context.drawImage(buttonImage, dx, dy);
                this.writeTextToCanvas(aCaption, 20, fontX, fontY, '#000');
                if (fn != null) {
                    this.d_clickCommands.set(fnName, new ButtonAction(dx, dy, buttonImage.height, buttonImage.width, fn));
                }
            });
        }
    }
    CanvasHelper.instance = null;
    Asteroids.CanvasHelper = CanvasHelper;
})(Asteroids || (Asteroids = {}));
var Asteroids;
(function (Asteroids) {
    class KeyboardHelper {
        constructor() {
            this.keyPressCallback = new Map();
            this.keyUpCallback = new Map();
            this.keyDownCallback = new Map();
            this.keyboardDown = (event) => {
                if (this.keyDownCallback.has(event.key)) {
                    event.preventDefault();
                    let callback = this.keyDownCallback.get(event.key);
                    if (callback != null) {
                        callback();
                    }
                }
            };
            this.keyboardUp = (event) => {
                if (this.keyUpCallback.has(event.key)) {
                    event.preventDefault();
                    let callback = this.keyUpCallback.get(event.key);
                    if (callback != null) {
                        callback();
                    }
                }
                if (this.keyPressCallback.has(event.key)) {
                    event.preventDefault();
                    let callback = this.keyPressCallback.get(event.key);
                    if (callback != null) {
                        callback();
                    }
                }
            };
            document.addEventListener('keydown', this.keyboardDown);
            document.addEventListener('keyup', this.keyboardUp);
        }
        static Instance() {
            if (this.instance == null) {
                this.instance = new KeyboardHelper();
            }
            return this.instance;
        }
        addKeyPressCallback(key, fn) {
            this.keyPressCallback.set(key, fn);
        }
        addKeyUpCallback(key, fn) {
            this.keyUpCallback.set(key, fn);
        }
        addKeyDownCallback(key, fn) {
            this.keyDownCallback.set(key, fn);
        }
        clearKeyCallbacks(key) {
            this.keyPressCallback.set(key, null);
            this.keyUpCallback.set(key, null);
            this.keyDownCallback.set(key, null);
        }
    }
    KeyboardHelper.instance = null;
    Asteroids.KeyboardHelper = KeyboardHelper;
})(Asteroids || (Asteroids = {}));
var Asteroids;
(function (Asteroids) {
    class MathHelper {
        static randomNumber(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }
    }
    Asteroids.MathHelper = MathHelper;
})(Asteroids || (Asteroids = {}));
var Asteroids;
(function (Asteroids) {
    class GameView extends Asteroids.ViewBase {
        constructor() {
            super();
            this.score = 400;
            this.d_GameController = Asteroids.GameController.Instance();
        }
        RenderScreen() {
            const lifeImagePath = "./assets/images/SpaceShooterRedux/PNG/UI/playerLife1_blue.png";
            this.d_canvasHelper.writeImageFromFileToCanvas(lifeImagePath, 70, 50);
            this.d_canvasHelper.writeImageFromFileToCanvas(lifeImagePath, 110, 50);
            this.d_canvasHelper.writeImageFromFileToCanvas(lifeImagePath, 150, 50);
            this.d_canvasHelper.writeTextToCanvas(`Score: ${this.score}`, 20, this.d_canvasHelper.GetWidth() - 150, 65, undefined, "right");
            this.d_GameController.Start();
        }
        Cleanup() {
        }
    }
    Asteroids.GameView = GameView;
})(Asteroids || (Asteroids = {}));
var Asteroids;
(function (Asteroids) {
    class MenuView extends Asteroids.ViewBase {
        constructor() {
            super();
            this.StartGame = () => {
                const center = this.d_canvasHelper.GetCenter();
                this.d_canvasHelper.ChangeView(new Asteroids.GameView());
            };
        }
        RenderScreen() {
            const centerCoordinate = this.d_canvasHelper.GetCenter();
            this.d_canvasHelper.writeTextToCanvas("Asteroids", 140, centerCoordinate.X, 150);
            this.d_canvasHelper.writeTextToCanvas("PRESS PLAY TO START", 40, centerCoordinate.X, centerCoordinate.Y - 20);
            this.d_canvasHelper.writeButtonToCanvas("Play", 'StartGameCommand', this.StartGame, undefined, centerCoordinate.Y + 200);
            this.d_canvasHelper.writeImageFromFileToCanvas("./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png", centerCoordinate.X - 50, centerCoordinate.Y + 40);
        }
        Cleanup() {
            this.d_canvasHelper.UnregisterClickListener('StartGameCommand');
        }
    }
    Asteroids.MenuView = MenuView;
})(Asteroids || (Asteroids = {}));
var Asteroids;
(function (Asteroids) {
    class ScoresView extends Asteroids.ViewBase {
        constructor() {
            super();
        }
        RenderScreen() {
            let highscores = [
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
            ];
            const Center = this.d_canvasHelper.GetCenter();
            const player = 'Ludo';
            const score = 99999;
            this.d_canvasHelper.writeTextToCanvas(`${player} score is ${score}`, 80, Center.X, Center.Y - 100);
            this.d_canvasHelper.writeTextToCanvas("HIGHSCORES", 40, Center.X, Center.Y);
            highscores.forEach((element, index) => {
                Center.Y += 40;
                this.d_canvasHelper.writeTextToCanvas(`${index + 1}: ${element.playerName} - ${element.score}`, 20, Center.X, Center.Y);
            });
        }
        Cleanup() {
        }
    }
    Asteroids.ScoresView = ScoresView;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=app.js.map