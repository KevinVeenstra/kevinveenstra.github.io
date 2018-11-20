// class voetballer {
//     // zonder invulling zou deze public moeten zijn
//     name: string;

//     public constructor(name:string) {
//         this.name = name;
//     }


// }

// let ronaldo = new voetballer('ronaldo')
// document.body.appendChild(document.createTextNode(ronaldo.name))
// alert(ronaldo.name)


// new voetballer('messi')
// new voetballer('van Basten')

class student {
    public name: string;
    public age: number;
    private studentNumber: number;

    public constructor(
        name:string,
        age:number,
        studentNumber:number
    ) {
        this.name = name;
        this.age = age;
        this.studentNumber = studentNumber;
    }

    public showInfo() {
        return this.name + this.age + this.studentNumber;
    }
}

let kevin : student = new student('Kevin', 33, 75483);
document.body.appendChild(document.createTextNode(kevin.name + ' ' + kevin.age));
document.body.appendChild(document.createTextNode(kevin.showInfo()));
console.table(kevin);
