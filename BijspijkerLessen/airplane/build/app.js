class passenger {
    constructor(name, seatNuber, airplane) {
        this.name = name;
        this.airplane = airplane;
        this.seatNumber = seatNuber;
    }
}
class airplane {
    constructor(typeAirplane, maxPassengers) {
        this.maxPassengers = maxPassengers;
        this.typeAirplane = typeAirplane;
        this.passengers = new Array();
    }
    board(passenger) {
        this.passengers.push(passenger);
    }
    getPassengers() {
        return [new passenger("kevin", 150, this),
            new passenger("Jesse", 151, new airplane("747", 798))];
    }
}
let superPlane = new airplane("007", 45);
let jarno = new passenger("jarno", 45, this);
let ricardo = new passenger("ricardo", 46, new airplane("747", 798));
superPlane.board(jarno);
superPlane.board(ricardo);
let passengers = new airplane("007", 2).getPassengers();
console.log(passengers);
let planeOne = new airplane("505", 3);
planeOne.getPassengers();
let planeTwo = new airplane("606", 5);
planeTwo.getPassengers();
//# sourceMappingURL=app.js.map