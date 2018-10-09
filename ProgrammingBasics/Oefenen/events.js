window.addEventListener('load', init);

function init() {
    const sumbitButton = document.getElementById('submit-btn');
    sumbitButton.addEventListener('click', clickEventHandler);
}

function clickEventHandler(event) {
    event.preventDefault();

    const inputText = document.getElementById('textInput').value;

    if (inputText == '') {
        console.log('please enter some info');
    } else {
        writeToDom(inputText);
    }
}

function writeToDom(newText) {
    /**
     * 1. Waar in het DOM //getElementById
     * 2. Welke element <li>tekst uit invoerveld</li> //createElement
     * 3. toevoegen aan plek in het DOM. //appendChild
     */

    //1
    const placeInDom = document.getElementById('results');
    //2
    const li = document.createElement('li');
    li.innerText = newText;
    //3
    placeInDom.appendChild(li);
}