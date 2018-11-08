
window.addEventListener('load', init);

var questions = [
    {
        vraag: '01101000 01100101 01101100 01101100 01101111',
        antwoord: 'Hello'
    },
    {
        vraag: '01010111 01100101 01101100 01101011 01101111 01101101',
        antwoord: 'Welkom'
    },
    {
        vraag: '01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011',
        antwoord: 'Tot ziens'
    },
    {
        vraag: '01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011',
        antwoord: 'Groetjes'
    }]

var input;
var output = document.getElementById('answerText')
var random = Math.floor(Math.random()* questions.length)
var questionCont = document.getElementById('question')
let current = questions[random];




function init() {
    console.log('DOM is loaded');
    loadQuestion()
    button = document.getElementById('submit');
    button.addEventListener('click', clickHandler)
}

function loadQuestion () {
    let currentQuestion = document.getElementById('questionText');
    currentQuestion.innerText = current.vraag;
}

function clickHandler() {
    event.preventDefault();
    getInput();
    checkanswer();
}

function getInput() {
    input = document.getElementById('inputAnswer').value
    console.log(input)
}
function checkanswer(){
    if (input == current.antwoord) {
        correct();
    }else {
        inCorrect();
    }
}

function correct() {
     output.innerHTML = `Je antwoord <span class="bg-green">${input}</span> is helamaal goed!`
     questionCont.setAttribute('class', 'bg-green')
}

function inCorrect() {
    output.innerHTML = `Je antwoord <span class="bg-red">${input}</span> is helamaal fout!`
    questionCont.setAttribute('class', 'bg-red')
}

