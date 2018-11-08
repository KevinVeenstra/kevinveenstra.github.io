// 1. Zet de uitwerking van de Fibonacci getallenreeks uit de vorige les om in een functie.
// zie uitwerking ws=6-loops voor de functie

// 2. Schrijf een functie countdown die van 10 - 1 aftelt (dit wordt ook in de console getoond). Geef aan de functie een jaartal parameter mee die als hij bij ‘0’ is zegt ‘Happy {jaartal}’.

const finalCountDown = function (newYear) {
    let startingNumber = 10;
    while (startingNumber >= 1) {
        console.log('Yup', startingNumber);
        if (startingNumber == 1) {
            console.log('Happy', newYear);
        }
        startingNumber--;
    }
}

finalCountDown('2018');

// 3. Schrijf een functie expressie en declaratie waarmee je aantoont dat een expressie en een declaratie op een andere manier met hoisting omgaan. (als je deze vraag niet snapt dan moet je de videoreeks uit udacity kijken. Daar wordt hoisting goed uitgelegd).

functionalExpression(); // reference error because function is declared after initialization
functionDeclaration(); // this will work

const functionalExpression = function (){
    console.log('this is an function expression, and is not hoisted');
}

function functionDeclaration(){
    console.log('this is a function declaration, and is hoisted');
}