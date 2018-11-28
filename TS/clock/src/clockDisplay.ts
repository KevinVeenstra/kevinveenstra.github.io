///<reference path="numberDisplay.ts"/>

class clockDisplay {

    private hours: numberDisplay;
    private minutes: numberDisplay;


    public constructor(hours: number, minutes: number, ) {
        this.hours = new numberDisplay(hours, 23);
        this.minutes = new numberDisplay(minutes, 59);

    }

    public tick(): void {
        this.minutes.increment()

        if (this.minutes.getValue() === 0) {
            this.hours.increment()
        }
    }
     public getTime() : string {
         return `${this.hours.getValue()} : ${this.minutes.getValue()}`
     }

}