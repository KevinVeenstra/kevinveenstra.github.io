// comment via JSDocs: http://usejsdoc.org/about-getting-started.html
// global variables
const product = {
    prijs: 9.99,
    merk: 'Robijn',
    img: './assets/img/wasmiddel.jpg'
}

// wait until window is loaded
window.addEventListener("load", init);

/**
 * function to initialize the website
 * @param {event} - event
 */
function init(event) {
    addProductToTheDom(document.getElementById('image'));
    const button = document.getElementById('submit');
    button.addEventListener('click', clickHandler);
}

/**
 * Function to add product to the DOM
 * @param {*} parentElement 
 */
function addProductToTheDom(parentElement) {
    const image = document.createElement('img');
    image.src = product.img;
    image.alt = product.merk;
    parentElement.appendChild(image);
}

/**
 * Functie to handle click event
 * @param {*} event 
 */
function clickHandler(event) {
    event.preventDefault();
    console.log(event);
    const inputValue = parseFloat(document.getElementById('price').value);
    console.log(inputValue);
    checkIfWinner(inputValue);
}

/**
 * Function to check if the price is a winner
 * @param {*} inputValue 
 */
function checkIfWinner(inputValue) {
    const minPrice = product.prijs - (0.10 * product.prijs);
    if (inputValue <= product.prijs && inputValue >= minPrice) {
        document.getElementById('message').innerHTML = 'We have an Winner';
    } else {
        document.getElementById('message').innerHTML = 'Helaas';
    }
}