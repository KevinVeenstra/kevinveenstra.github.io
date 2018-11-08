window.addEventListener('load', init);

//global vars
var coureursArray = [
    {
        coureur: 'verstappen',
        rondetijd1: 4.03,
        rondetijd2: 4.23,
        rondetijd3: 4.56,
    },
    {
        coureur: 'Ricciardo',
        rondetijd1: 4.01,
        rondetijd2: 5.04,
        rondetijd3: 4.76
    },
]

/**
 * Function to initialize the application
 * @param {*} event 
 */
function init(event) {
    console.log('in init');
    button = document.getElementById('submit');
    button.addEventListener('click', clickHandler);
}

function clickHandler(event) {
    event.preventDefault();
    pushLaptime();
    console.log(event);
}


function pushLaptime() {
    lapTime = document.getElementById('lapTime').value;
    coureursArray.push(lapTime)
    console.log(lapTime);
    coureur = document.getElementById('driver', 'value');
    coureursArray.push(driver);
    console.log(driver);
}

