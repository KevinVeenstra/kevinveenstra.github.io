// Opdracht 1
let number = 12; //<-- geef hier een nummer op//
console.log("The given number is : " + number);

number = number % 2 == 0;
console.log("The number is even : " + number);

// Opdracht 2
let stringOpdracht2 = "Programming is not so cool"; // Orginele tekst //
console.log(stringOpdracht2);

stringOpdracht2.replace(`not `, ``); // Hier wordt not verwijderd //
let Opdracht2ReplacedString = stringOpdracht2.replace(`not `, ``) // hier krijgt ~
console.log(Opdracht2ReplacedString);

// Opdracht 3
let givenValeu = "1400";
givenValeu = "1400" === "Ik woon in naboo";
console.log(givenValeu);
console.log(typeof givenValeu);