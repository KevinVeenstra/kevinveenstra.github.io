// global variables
const product = {
    prijs: 9.99,
    merk: 'Robijn',
    img: './assets/img/wasmiddel.png'
}

// wait until window is loaded
window.addEventListener("load", init);

/**
 * function to initialize the website
 * @param {event} - event
 */
function init(event) {
    let productDiv = document.getElementById('image')
    let image = document.createElement('img')
    image.setAttribute('src', './assets/img/wasmiddel.png')
    productDiv.appendChild(image)
    addEventListener('click', clickHandler)
}


function clickHandler(event) {
    getElementById('price').value
}


function checkPrice() {

}

function writeMessag() {

}

