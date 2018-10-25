window.addEventListener('load', init);


function init() {
    console.log('DOM is loaded');
}

var awnsers = [
    {    
    binary: '01101000 01100101 01101100 01101100 01101111',
    awnser: 'Hello'
    },
    {
    binary: '01010111 01100101 01101100 01101011 01101111 01101101',
    awnser: 'Welkom'
    },
    {
    binary: '01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011',
    awnser: 'Tot ziens'
    },
    {
    binary: '01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011',
    awnser: 'Groetjes'
}]

var Input = document.getElementById('inputAnswer');       
var showText = document.getElementById('answerText');       
var question = document.getElementById('questionText');  
var button = document.getElementById('submit');               
var questionContainer = document.getElementById('question');   
var currentAnswer;

button.addEventListener('click', buttonPress);                 

function renderAnswers(){                                               
    let Gameselect = Math.round(Math.random()*3);                                        
    questionContainer.setAttribute('class', 'question'); 
    question.innerText = awnsers[Gameselect].binary;
    currentAnswer = awnsers[Gameselect].awnser;
}

function goodAnswer(){
    showText.innerHTML = `Je antwoord <span class="bg-green">${Input.value}</span> is helemaal goed`;
    questionContainer.setAttribute('class', 'bg-green'); 
    renderAnswers();         
}

function wrongAnswer(){
    showText.innerHTML = `Helaas, <span class="bg-red">${Input.value}</span> is niet juist, probeer het nog eens`; 
    questionContainer.setAttribute('class', 'bg-red'); 
}

function buttonPress() {           
    event.preventDefault();
    if(Input.value === currentAnswer){
        goodAnswer()  
    } else {
        wrongAnswer();
    }
}


renderAnswers();