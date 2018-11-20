class student {
    constructor(name, age, studentNumber) {
        this.name = name;
        this.age = age;
        this.studentNumber = studentNumber;
    }
    showInfo() {
        return this.name + this.age + this.studentNumber;
    }
}
let kevin = new student('Kevin', 33, 75483);
document.body.appendChild(document.createTextNode(kevin.name + ' ' + kevin.age));
document.body.appendChild(document.createTextNode(kevin.showInfo()));
console.table(kevin);
//# sourceMappingURL=app.js.map