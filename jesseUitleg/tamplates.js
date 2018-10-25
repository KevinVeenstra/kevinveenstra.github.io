//* declaratie van variabelen-------------------------

// constante variabelen varanderen niet van waarden
// een string declareer je met quotes
const constante = ''
// een 'var' kan veranderen en behoud blijft bestaan binnen het hele document
// als je een number wilt declareren zet je het achter je variabele declaratie
var variabele = 9

// een 'let' kan veranderen maar blijft binnen een bapaald blok, bijv functie of for loop, hierdoor kan je dezelfde 
// let meerdere keren gebruiken
// een boolean kan je aangeven door true of false te shrijven
let letvar = true

//* If statements--------------------------------------

// een if statement kan je gebruiken als je bepaalde stukken code alleen wilt uitvoeren op het moment dat er bepaalde
// er aan bepaalde condities voldaan worden.

if ( /** conditie die voldaan moet worden */ ) {
    /** code die uitgevoerd moet worden */
} else if ( /**conditie die voldaan moet worden op het moment dat de eerste niet voldaan is */ ) {
    /** code die in dit geval uitgevoerd moet worden */
} else {
    /** code die uitgevoerd moet worden als er aan geen enkele conditie word voldaan */
}

//TODO voorbeeld:

if (variabele > 10) { // controleert of variabele groter is dan 10
    console.log('1'); // zo ja console logt hij 1
} else if (variable < 10) { // zo nee checkt het of variabele kleiner is als 10
    console.log('2') // zo ja console logt het 2
} else { // in alle andere situaties
    console.log('3') // word 3 ge console-logt
}

//* Loops-----------------------------------------------

//! While Loops

//een while loop is een versimpelde versie van een for loop

while ( /**conditie die voldaan moet worden om te herhalen*/ ) {
    /**code die uitgevoerd moet worden */
    /** het is altijd belangrijk om je condition te updaten aan het einde van je while loop om een infinite loop te voorkomen */
}

//TODO voorbeld:

let counter = 20 // maakt de variabele counter met een waarde van 20
while (counter > 10) { // checkt of counter groter is dan 10
    console.log(counter); // console logt de waarde van counter
    counter--; // verlaagd de waarde van counter met 1
} // herhaalt de bovenstaande code totdat counter niet meer groter is dan 10

//! For loops

// een for loop is anders gestructureerd als een while loop, je moet namelijk de variabele declareren en aangeven wat je aan het einde van de loop wilt doen
// een for loop is opgebouwd uit 3 blokjes:
// 1 variabele declaratie: let i = 0
// 2 conditie: bv. i > 10
// 3 stukje code aan het einde van de loop: i++
// deze stukjes vul je zo in:

for ( /** 1; 2; 3; */ ) {
    //de code die uitgevoerd moet worden
}

//TODO voorbeeld:

for (i = 0; i < 10; i++) { // declareer variabele i en stel hem gelijk aan 0, herhaalt als i kleiner is dan 10, verhoogt waarde i met 1
    console.log(i); // console logt de waarde van i
}

//* Functions--------------------------------------------------

//functions zijn heel belangrijk, je kan hiermee namelijk herhaling voorkomen.
// je hebt 2 soorten functions, namelijk met en zonder callback

//! functions zonder callback

// eigenlijk het simpelste je kan namelijk je functie declareren, een naam geven en de code hier tussen zetten:

function /**naam van je functie */ () {
    //code die uitgevoerd moet worden
}

// je functie (dus de code binnen de functie roep je zo op:

/**naam van je functie();*/

//TODO voorbeeld:

function noCallback() { //declaratie van je functie
    console.log('noCallback'); //code die uitgevoerd word op het moment dat je je functie aanroept
}

noCallback(); //aanroepen van de functie

//! Functions met callback

// callback functies zijn hetzelfde opgebouwd alleen hebben ze een variabele en een return statement

//TODO voorbeeld:

function callback(param) { //declaratie van functie met naam 'callback' en een parameter genaamd 'param'
    return param*2;        // return statement, geeft de waarde van param * 2 terug
}

callback(10)     //roept de functie aan met de waarde 10 meegegeven, 10 word ingevuld in de functie onder de variabele param
                // in dit geval zal deze functie 10*2 dus 20 teruggeven

//* Arrays -------------------------------------------------------

//de declaratie van arrays is eigenlijk hetzelfde als die van een variabele, je geeft de array aan met blokhaken
//de informatie binnen een array scheid je met komma's
//als je een stuk info uit een array wilt hebben roep je de naam van de array op met vervolgens de index van het stuk date, let op! de index begint bij 0!

//TODO voorbeeld:

var myArray = ['een', 'twee', 'drie']

//oproepen van data uit de array:

myArray[1]; //haal het tweede stuk data op uit myArray

//je kan een stukje data toevoegen aan een array met array.push, dit is als volgt gestructureerd:

myArray.push(myData) //myArray is hier de naam van de array en myData wat je naar de array wilt pushen

//* Objects -------------------------------------------------------

//een object lijkt veel op een array maar met meerdere lagen je geeft en object aan met wigglehaakjes > {}

var myObject = {
    naam:'kees',
    geslacht: 'man',
    leeftijd: 81 
}

// als je vervolgens een stukje uit deze object wilt halen gebruik je de punt notatie
// bijvoorbeeld als je de leeftijd uit je object wilt halen doe je eerst de 'naam van je object'.'de naam van het stukje data in je object'

//TODO voorbeeld:

myObject.Leeftijd;

//* DOM elementen---------------------------------------------------

//DOM elementen (document object model) gebruik je als je een stukje data uit je html bestand wilt ophalen of bewerken

//! Data ophalen:

//TODO voorbeeld:

document.getElementById('idname');              //haalt elementen op aan de hand van de id
document.getElementsByClassName('classname');   //haalt elementen op aan de hand van de class
document.getElementsByTagName('tagname');       //haalt elementen op aan de hand van het type tag

//! Data creéren

//TODO voorbeeld:

var createImg = document.createElement('img');       //creëert een 'img' element en kent het toe aan een variabele
createImg.setAttribute('id', 3)                     // voegt een id met de waarde 3 toe aan de zojuist gemaakte image