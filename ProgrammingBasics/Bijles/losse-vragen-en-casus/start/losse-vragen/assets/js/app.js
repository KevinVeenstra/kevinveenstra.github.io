// comment via JSDocs: http://usejsdoc.org/about-getting-started.html
/**
 * Vraag 1
 * Gegeven is de volgende array van employees. Maak een functie die de oorspronkelijke array
 * als argument neemt en een nieuwe array retourneert waarbij de het salaris met 10% is verhoogt.
 * 
 */
const employees = [{
    name: 'Jan',
    surname: 'Jansen',
    salary: 35000
},
{
    name: 'Kees',
    surname: 'Groot',
    salary: 27000
},
{
    name: 'Bert',
    surname: 'Pietersen',
    salary: 30000
},
{
    name: 'Wimpie',
    surname: 'Jobsen',
    salary: 21000
}
];

function increaseSalary(percentage) {
    let newArray = [];
    for (let index = 0; index < employees.length; index++) {
        let newObject = {
            name: employees[index].name,
            surname: employees[index].surname,
            salary: employees[index].salary * percentage,
        }
        newArray.push(newObject);
    }
    return newArray;
}


// voeg hier je antwoord toe

/**
 * Vraag 2
 * Gegeven zijn de volgende categorien voertuigen.
 * Categorie 1: auto's, busjes, campers of bestelwagens, waarbij het hoogste punt van het voertuig maximaal 2 meter bedraagt.
 * Categorie 2: auto's, busjes, campers of bestelwagens, waarbij het hoogste punt van het voertuig meer dan 2 meter, maar maximaal 3 meter bedraagt.
 * Categorie 3: campers, bussen en bedrijfsvoertuigen met een hoogte van meer dan 3 meter of een toegestane maximummassa van meer dan 3500 kg.
 * Maak een beslisstructuur die precies aangeeft in welke categorie een voertuig valt. Maar daarbij gebruik van de onderstaande voertuig object.  
 */

const myVan = {
    type: 'auto',
    weight: 1300,
    height: 2.05
}

// voeg hier je antwoord toe

/**
 * Vraag 3
 * a) in onderstaand stukje code wordt voornamelijk vars gebruikt. Beargumenteer waarom je misschien beter een const of let kan gebruiken. Doe dit in het commentaar.
 * b) in onderstaand stukje code wordt veel code herhaald. Schrijf een generieke functie die de volgende elementen kan maken p, h1 en img
 */

var placeholder = document.getElementById('wrapper');
var p = document.createElement('p');
p.classList.add('article');
p.innerText = 'new paragraph';
var h1 = document.createElement('h1');
h1.classList.add('headlines');
h1.innerText = 'myNewText'
var image = document.createElement('img');
image.src = './assets/images/buzz.png';
placeholder.appendChild(p);
placeholder.appendChild(h1);
placeholder.appendChild(image);

//voeg hier je antwoord toe.

// wait until window is loaded
window.addEventListener("load", init);

/**
 * function to initialize the website
 */
function init() {
    //roep hier waar mogelijk je antwoorden aan.
    console.log('new salary array:', increaseSalary(1.1))
}