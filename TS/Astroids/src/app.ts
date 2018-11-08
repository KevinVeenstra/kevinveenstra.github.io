class ship {
    name: string;
    color: string;
    cannons: number;
    distanceTraveld: number;

    move() {
        console.log('I am moving')
        console.log(this.distanceTraveld)
        this.distanceTraveld ++;
    }
    shoot() {
        console.log('pew pew!')
    }
}

let spaceship: ship = new ship();

spaceship.name = "USS PsyTripper";
spaceship.color = "grey";
spaceship.cannons = 35;
spaceship.distanceTraveld = 10000;

spaceship.move();
spaceship.distanceTraveld = 5;
spaceship.move();
