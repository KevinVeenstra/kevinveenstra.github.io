/// <reference path="roadTrip.ts"/>

class car {

    private modelType: string;
    private merk: string;
    private doors: number;

    public constructor(model: string, merk: string, doors: number) {



    }

    public getRoadTrips(): Array<roadTrip> {
        // let roadTrips = [new roadTrip("cookies", 50, "slam")]

        return [new roadTrip("cookies", 50, "slam"), new roadTrip("drinks", 150, "100%NL")]
    }



    // private radio() {

    // }

    // private windsshieldWhiper() {

    // }

    // private changeDirection() {

    // }
}