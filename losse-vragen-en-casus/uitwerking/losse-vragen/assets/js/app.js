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

//vraag 1 - answer
//difficult with map function
function raiseSalary(percentage, oldArray) {
    const newArray = oldArray.map(employee => {
        const rObj = {
            name: employee.name,
            surname: employee.surname,
            salary: employee.salary + employee.salary * percentage
        };
        return rObj;
    });
    console.log(newArray);
}

//easier with for loop
function raiseSalarySimple(percentage, oldArray){
    const newEmployeeArray = [];
    for (let index = 0; index < oldArray.length; index++) {
        const employee = {
            name: oldArray[index].name,
            surname: oldArray[index].surname,
            salary: oldArray[index].salary + oldArray[index].salary * percentage
        }
        newEmployeeArray.push(employee);
    }
    return newEmployeeArray;
}

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

// Vraag 2 - antwoord
function checkCategory(type, weight, height) {
    let currentCategory = null;
    let vehicleTypesCat1And2 = ['auto', 'busje', 'camper', 'bestelwagen'];
    let vehicleTypesCat3 = ['camper', 'bus', 'bedrijfsvoertuig'];
    if (vehicleTypesCat1And2.includes(type) && height < 2) {
        currentCategory = 1;
    } else if (vehicleTypesCat1And2.includes(type) && height < 3 && height > 2) {
        currentCategory = 2;
    } else if (vehicleTypesCat3.includes(type) && height > 3 && weight > 3500) {
        currentCategory = 3;
    } else {
        console.error('your type of vehicle is offscale');
    }
    return currentCategory;
}

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
image.src = './assets/img/buzz.jpg';
placeholder.appendChild(p);
placeholder.appendChild(h1);
placeholder.appendChild(image);

function writeToTheDom(placeInDom, Element) {
    const newElem = document.createElement(Element.name);
    
    if(Element.className){
        newElem.classList.add(Element.className);
    }
    if(Element.src){
        newElem.src = Element.src;
    }
    if(Element.text){
        newElem.innerText = Element.text;
    }
    placeInDom.appendChild(newElem);
}

// wait until window is loaded
window.addEventListener("load", init);

/**
 * function to initialize the website
 */
function init() {
    raiseSalary(0.10, employees);
    console.log('New salary table:',raiseSalarySimple(0.10, employees));
    console.log('Q2: mycategory is:', checkCategory(myVan.type, myVan.weight, myVan.height));
    writeToTheDom(document.getElementById('wrapper'), {name: 'p', text: 'blabla'});
}