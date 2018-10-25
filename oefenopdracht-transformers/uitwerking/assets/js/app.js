// All global variables
const imageFolder = "./assets/images/";
const imagez = [{
        position: 1,
        name: 'transformers',
        source: 'transformers-1.png'
    },
    {
        position: 2,
        name: 'transformers',
        source: 'transformers-2.png'
    },
    {
        position: 3,
        name: 'transformers',
        source: 'transformers-3.png'
    },
    {
        position: 4,
        name: 'transformers',
        source: 'transformers-4.png'
    }
]
let currentClick = 1;
let attempts = 5;
let imageId = null;

window.addEventListener("load", init);

/**
 * Function to initialize the application
 * @param {event} - event
 */
function init(event) {
    imageId = document.getElementById('images');
    imageId.addEventListener('click', clickHandler);
    shuffle(imagez);
    renderImages();
    renderAttempts();
}

/**
 * Click handler function
 * @param {event} - event
 */
function clickHandler(event) {

    if (attempts >= 0) {
        attempts--;
        renderAttempts();
        if (currentClick == event.target.id) {
            console.log(event.target);
            event.target.classList.add('border-green');
            currentClick++;
        }
        let amountOfGreen = document.getElementsByClassName('border-green').length;
        console.log(amountOfGreen);
        if (amountOfGreen == 4) {
            document.getElementById('message').innerText = 'We have a winner';
            imageId.removeEventListener('click', clickHandler);
        }
    }  
    
    if (attempts < 0) {
        document.getElementById('message').innerText = 'We have a loser'
        imageId.removeEventListener('click', clickHandler);
    }




}
/**
 * Function to render the attempts in the DOM
 */
function renderAttempts() {
    document.getElementById('attempts').innerText = attempts;
}

/**
 * Function to render the images
 */
function renderImages() {
    imagez.forEach(function (element, index, array) {
        const image = document.createElement('img');
        image.src = imageFolder + element.source;
        image.alt = element.name;
        image.id = element.position;
        imageId.appendChild(image);
    });
}
/**
 * Function to shuffle an array
 * @param {*} array 
 * Based on: from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * If you find a solluttion on the internet just add the source.
 */
function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}