/// <reference path="passenger.ts"/>

class airplane {

    private typeAirplane: string
    private maxPassengers: number

    public passengers: Array<passenger>

    public constructor(typeAirplane: string, maxPassengers: number) {
        this.maxPassengers = maxPassengers
        this.typeAirplane = typeAirplane
        this.passengers = new Array<passenger>()
    }

    public board(passenger:passenger) : void {

        this.passengers.push(passenger);
        
    }

    public getPassengers(): Array<passenger> {

        return [new passenger("kevin", 150, this),
         new passenger("Jesse", 151, new airplane("747", 798))]
    }
}

