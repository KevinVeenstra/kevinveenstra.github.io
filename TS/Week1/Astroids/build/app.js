class ship {
    constructor(name, color, cannons, distanceTravelled) {
        this.name = name;
        this.color = color;
        this.cannons = cannons;
        this.distanceTravelled = distanceTravelled;
    }
    setName(name) {
        this.name = name;
    }
    setCannons(amount) {
        this.cannons = amount;
    }
    addDistanceTravelled() {
        this.distanceTravelled++;
    }
    move() {
        this.addDistanceTravelled();
        console.log(this.distanceTravelled);
    }
    shoot() {
        console.log('pew pew!');
    }
}
let spaceship = new ship("USS PsyTripper", "gray", 35, 10000);
spaceship.move();
//# sourceMappingURL=app.js.map