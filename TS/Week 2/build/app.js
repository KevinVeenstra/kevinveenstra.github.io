class Game {
    constructor(canvasId) {
        this.player = "Player1";
        this.score = 400;
        this.lives = 3;
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
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
        ];
        this.start_screen();
    }
    start_screen() {
        this.writeAsteroidHeading();
        this.writeIntroText();
        this.writeStartButton();
        this.writeTextToCanvas(50, "#FFF", "center", `play`, this.canvas.width / 2 - 100, this.canvas.height / 1.2);
        this.drawAsteroid();
    }
    writeAsteroidHeading() {
        this.ctx.font = '150px Minecraft';
        this.ctx.fillStyle = '#FFF';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('ASTEROIDS', this.canvas.width / 2, this.canvas.height / 5);
    }
    writeIntroText() {
        this.ctx.font = '50px Minecraft';
        this.ctx.fillStyle = '#FFF';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('PRESS PLAY TO START', this.canvas.width / 2, this.canvas.height / 2.5);
    }
    writeStartButton() {
        var img = new Image();
        img.src = './assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png';
        img.addEventListener('load', () => {
            this.ctx.drawImage(img, this.canvas.width / 2 - 100, this.canvas.height / 1.2);
        });
    }
    drawAsteroid() {
        var img2 = new Image();
        img2.src = './assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png';
        img2.addEventListener('load', () => {
            this.ctx.drawImage(img2, this.canvas.width / 2 - 50, this.canvas.height / 1.9);
        });
    }
    level_screen() {
        this.loadLives();
        this.writeTextToCanvas(50, "#FFF", "right", `score: ${this.score}`, this.canvas.width / 1.05, this.canvas.height / 15);
        this.randomAstroids();
        this.loadPlayerShip();
    }
    loadLives() {
        var x = 25;
        var img = new Image();
        img.src = './assets/images/SpaceShooterRedux/PNG/UI/playerLife2_blue.png';
        for (let lives = this.lives; lives > 0; lives--) {
            img.addEventListener('load', () => {
                this.ctx.drawImage(img, this.canvas.width / x * lives, this.canvas.height / 25);
            });
        }
    }
    randomAstroids() {
        for (let index = 0; index < 10; index++) {
            let image = new Image();
            let meteor = ['Brown_big1', 'Brown_big2', 'Brown_big3', 'Brown_big4', 'Brown_med1', 'Brown_med2', 'Brown_small1', 'Brown_small2', 'Brown_tiny1', 'Brown_tiny2', 'Grey_big1', 'Grey_big2', 'Grey_big3', 'Grey_big4', 'Grey_med1', 'Grey_med2', 'Grey_small1', 'Grey_small2', 'Grey_tiny1', 'Grey_tiny2'];
            image.src = `./assets/images/SpaceShooterRedux/PNG/Meteors/meteor${meteor[this.randomNumber(0, meteor.length)]}.png`;
            let x = this.randomNumber(0, this.canvas.width);
            let y = this.randomNumber(0, this.canvas.height);
            image.onload = () => {
                this.ctx.drawImage(image, x, y);
            };
        }
    }
    loadPlayerShip() {
        var img = new Image();
        img.src = './assets/images/SpaceShooterRedux/PNG/playerShip2_blue.png';
        img.addEventListener('load', () => {
            this.ctx.drawImage(img, this.canvas.width / 2 - 100, this.canvas.height / 1.2);
        });
    }
    title_screen() {
        this.ctx.font = "80px Minecraft";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`${this.player} score is ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 - 100);
        this.ctx.font = "40px Minecraft";
        this.ctx.fillText("HIGHSCORES", this.canvas.width / 2, this.canvas.height / 2);
        let yCoord = this.canvas.height / 2;
        this.highscores.forEach((element, index) => {
            yCoord += 40;
            this.ctx.font = "20px Minecraft";
            this.ctx.fillText(`${index + 1}: ${element.playerName} - ${element.score}`, this.canvas.width / 2, yCoord);
        });
    }
    writeTextToCanvas(fontsize, color, alignment, text, xCoordinates, yCoordinates) {
        this.ctx.font = `${fontsize}px minecraft`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinates, yCoordinates);
    }
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
let init = function () {
    const Asteroids = new Game(document.getElementById('canvas'));
};
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map