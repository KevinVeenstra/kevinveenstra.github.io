// opdracht 1 cijfer beoordeling met if else statements
var grade = 6.8; // <-- voer hier het behaalde cijfer in
var yourGrade = "Je behaalde grade is: ";

if (grade < 6) {
    console.log(yourGrade + "onvoldoende");
} else if (grade <= 7) {
    console.log(yourGrade + "voldoende");
} else if (grade <= 9) {
    console.log(yourGrade + "goed");
} else if (grade === 10) {
    console.log(yourGrade + "uitmunted");
}

// opdracht 2 cijfer beoordeling met switch statements (gecombineerd)
var test = 8; // <-- voer hier het behaalde cijfer in
var yourGrade = "Je behaalde test is: ";

switch (test) {
    case 1: case 2: case 3: case 4: case 5:
        console.log(yourGrade + "onvoldoende");
        break;
    case 6: case 7:
        console.log(yourGrade + "voldoende");
        break;
    case 8: case 9:
        console.log(yourGrade + "goed");
        break;
    case 10:
        console.log(yourGrade + "uitmuntent");
        break;
}

// opdracht 3 Is het boek er en heb ik tijd
// met mogelijke jobs teacher, student or deliverer
var puchaseBook = true;
var inTrain = true;
var job = "deliverer"

var solved = false;

if (puchaseBook === true && inTrain === true && job === "teacher") {
    console.log("I can finaly enjoy my book!")
} else if (puchaseBook === true && inTrain === false && job === "teacher") {
    console.log("I have my book, but I don't have time to enjoy it!");
} else if (puchaseBook === false && job === "teacher") {
    console.log("I have not yet orderd my book");
} else if (puchaseBook === true && inTrain === true && job === "student") {
    console.log("It's time for homework!")
} else if (puchaseBook === true && inTrain === false && job === "student") {
    console.log("I have my book, but I don't have time to do homework!");
} else if (puchaseBook === false && job === "student") {
    console.log("I have not yet orderd my book");
} else if (puchaseBook === true && inTrain === true && job === "deliverer") {
    console.log("The book is send!")
} else if (puchaseBook === true && inTrain === false && job === "deliverer") {
    console.log("The book is orderd, but not het send");
} else if (puchaseBook === false && job === "deliverer") {
    console.log("No book is orderd");
}