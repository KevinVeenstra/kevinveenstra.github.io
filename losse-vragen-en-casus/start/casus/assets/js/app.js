

// global variables
const product = {
    prijs: 9.99,
    merk: 'Robijn',
    img: './assets/img/wasmiddel.png'
}


var input;
// funcions

function insertImage() {
    const imgCont = document.getElementById('image');
    var newImg = document.createElement('img');
    newImg.setAttribute('src', product.img);
    imgCont.appendChild(newImg);
}

function clickListener() {
    let button = document.getElementById('submit')
    button.addEventListener('click', clickHandler);
}

function getInput() {
    input = document.getElementById('price').value;
    console.log(input);
}

function clickHandler(){
    event.preventDefault();
    getInput();
    checkAwnser()
}


function checkAwnser() {
    var minMar = product.prijs * 0.9;
    var maxMar = product.prijs;
    var message = document.getElementById('message')
    if (minMar < input && maxMar > input) {
        message.innerText = 'Goed geraden!'
    }else {
        message.innerText = 'Fout, Probeer nog eens'
    }
}

insertImage();
clickListener();