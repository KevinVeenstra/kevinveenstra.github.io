// ship
//-----------------------------------------
class ship {
    private name: string;
    public color: string;
    private cannons: number;
    private healthPoints: number;
    private distanceTravelled: number;


    public constructor(
        name: string,
        color: string,
        cannons: number,
        healthPoints: number,
        distanceTravelled: number) {
        this.name = name;
        this.color = color;
        this.cannons = cannons;
        this.healthPoints = healthPoints;
        this.distanceTravelled = distanceTravelled;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public setCannons(amount: number) {
        this.cannons = amount;
    }

    public setHealthPoints(amount: number) {
        this.healthPoints = amount;
    }

    private addDistanceTravelled() {
        this.distanceTravelled++;
    }

    public move() {
        this.addDistanceTravelled();
        console.log(this.distanceTravelled)
    }
    public shoot() {
        console.log('pew pew!')
    }

}


let spaceship: ship = new ship("USS PsyTripper", "gray", 35, 10, 10000);
spaceship.move();
spaceship.shoot();


// Astroids
//------------------------------------------------------

class astroids {
    public color: string;
    public size: number;
    public healthPoints: number;
    private distanceTravelled: number;

    public constructor(
        color: string,
        size: number,
        healthPoints: number,
        distanceTravelled: number) {
        this.color = color;
        this.size = size;
        this.healthPoints = healthPoints;
        this.distanceTravelled = distanceTravelled;
    }

    public setColor(name: string) {
        this.color = name;
    }

    public setSize(amount: number) {
        this.size = amount;
    }

    public setHealthPoints(amount: number) {
        this.healthPoints = amount;
    }

    private addDistanceTravelled() {
        this.distanceTravelled++;
    }

    public move() {
        this.addDistanceTravelled();
        console.log(this.distanceTravelled)
    }

}

let enemy: astroids = new astroids("gray", 5, 10, 10000);

//bullets
//-----------------------
class bullet {
    private size: number;
    private distanceTravelled: number;
    public damage: number;

    public constructor(
        size: number,
        distanceTravelled: number,
        damage: number) {
        this.size = size;
        this.distanceTravelled = distanceTravelled;
        this.damage = damage;
    }

    public setSize(amount: number) {
        this.size = amount;
    }

    private addDamage() {
        this.damage++
    }

    private addDistanceTravelled() {
        this.distanceTravelled++;
    }

    public move() {
        this.addDistanceTravelled();
        console.log(this.distanceTravelled)
    }

    public damageToObject() {
        this.addDamage();
        console.log(this.damage);

    }

}

let bullets: bullet = new bullet(5, 10, 10000);
bullets.damageToObject();
bullets.move();



// powerUps
//------------------------------------------------------------------------
class powerUps {
    private type: string;
    private position: number;

    public constructor(
        type: string,
        position: number) {
        this.type = type;
        this.position = position;
    }
}

let powerUp: powerUps = new powerUps("moreCannons", 50);