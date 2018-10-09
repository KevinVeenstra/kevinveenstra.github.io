const allListItems = document.getElementsByTagName('li');
const ul = document.getElementById('groceryList');
const firstChild = ul.firstElementChild;

console.log(allListItems);
console.log(firstChild);

firstChild.classList.add('standOut')
const groceryList = [{
    'name': 'Tandenborstel',
    'price': 0.99
},
{
    'name': 'Deodorant',
    'price': 7.99
},
{
    'name': 'Bak meel',
    'price': 0.79
},
{
    'name': 'Wortels',
    'price': 2.99
}
];

createMyAwesomeTable();

function createMyAwesomeTable() {

const table = document.createElement('table');
for (let index = 0; index < groceryList.length; index++) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.id = 'name'+index;
    tdName.innerText = groceryList[index].name;
    const tdPrice = document.createElement('td');
    tdPrice.innerText = groceryList[index].price;
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    table.appendChild(tr);
}

const body = document.getElementById('body');
body.appendChild(table);

}