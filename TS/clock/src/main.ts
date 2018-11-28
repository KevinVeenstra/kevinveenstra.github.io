///<reference path="numberDisplay.ts"/>
///<reference path="clockDisplay.ts"/>

// let minuteDisplay = new numberDisplay(15, 59); 
// let hourDisplay = new numberDisplay(13,23);

let clock = new clockDisplay(12, 41);

for (let i = 0; i < 680; i++) {
    console.log(clock.getTime())
    clock.tick();
}