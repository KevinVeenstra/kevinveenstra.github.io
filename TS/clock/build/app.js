class numberDisplay {
    constructor(value, limit) {
        this.value = value;
        this.limit = limit;
    }
    increment() {
        if (this.value === this.limit) {
            this.value = 0;
        }
        else {
            this.value++;
        }
    }
    getValue() {
        return this.value;
    }
}
class clockDisplay {
    constructor(hours, minutes) {
        this.hours = new numberDisplay(hours, 23);
        this.minutes = new numberDisplay(minutes, 59);
    }
    tick() {
        this.minutes.increment();
        if (this.minutes.getValue() === 0) {
            this.hours.increment();
        }
    }
    getTime() {
        return `${this.hours.getValue()} : ${this.minutes.getValue()}`;
    }
}
let clock = new clockDisplay(12, 41);
for (let i = 0; i < 680; i++) {
    console.log(clock.getTime());
    clock.tick();
}
//# sourceMappingURL=app.js.map