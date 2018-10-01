// opdracht 1 cijfer beoordeling
var grade = 10;
var yourGrade = "Je behaalde cijfer is ";

if (grade < 6) {
    console.log(yourGrade + "onvoldoende");
} else if (grade <= 7) {
    console.log(yourGrade + "voldoende");
} else if (grade <= 9) {
    console.log(yourGrade + "goed");
} else {
    console.log(yourGrade + "uitmunted")
}

// opdracht 2 even of oneven
var number = 6;

if (number % 2 === 0) {
    console.log("even");
} else if (number % 2 === 1) {
    console.log("odd");
}

// opdracht 3 hoeveel mensen in een band
var musicians = 9;

if (musicians === 0) {
    console.log("not a group");
} else if (musicians === 1) {
    console.log("solo");
} else if (musicians === 2) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet");
} else if (musicians > 4) {
    console.log("this is a large group");
}

// opdracht 4 murder mystery
var room = "gallery";
var suspect = "Ms. van Cleve";

var weapon = "";
var solved = false;

if (room === "gallery" && suspect === "Ms. van Cleve") {
    weapon = "trophy";
    solved = true;
} else if (room === "ballroom" && suspect === "Mr. Kalenhof") {
    weapon = "poison";
    solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = true;
} else if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife";
    solved = true;
}

if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

// opdracht 5 Checking Your Balance

// change the values of balance, checkBalance, and isActive to test your code
var balance = 12;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance === true && isActive === true && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");

} else if (checkBalance === false && isActive === true) {
    console.log("Thanks have a nice day!");

} else if (checkBalance === true && isActive === false) {
    console.log("Your account is no longer active.");

} else if (checkBalance === true && balance == 0) {
    console.log("Your account is empty.");

} else if (checkBalance === true && balance < 0) {
    console.log("Your balance is negative. Please contact bank");
}