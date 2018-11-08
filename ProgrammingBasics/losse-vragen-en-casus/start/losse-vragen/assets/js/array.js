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

// voeg hier je antwoord toe
function newSalary() {
    for (let index = 0; index < employees.length; index++) {
        const payRise = employees[index]
        console.log(`salary ${payRise.salary * 1.1}`)
    }
    
}

console.log(newSalary())