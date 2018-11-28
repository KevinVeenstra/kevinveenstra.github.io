/// <reference path="airplane.ts"/>

class passenger {
    
    private airplane:airplane;
    private name: string
    private seatNumber: number

    public constructor(name:string, seatNuber:number, airplane:airplane) {
        this.name = name
        this.airplane = airplane
        this.seatNumber = seatNuber
    }

}

