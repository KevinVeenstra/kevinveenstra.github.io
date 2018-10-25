// 1. Schrijf een plaatje naar de DOM
let randomImage = document.getElementById('random-img');
randomImage.setAttribute('src', './assets/images/bat.jpg')

// 2. Schrijf alle plaatjes naar de DOM
const imageNames = [
    'bat', 'bug', 'cat', 'dog', 'fly', 'frog', 'monkey', 'mouse', 'spider'
]

let imageGrid = document.getElementById('img-grid')

for (i = 0; i < imageNames.length; i++) {
    let image = document.createElement('img')
    image.setAttribute('src', `./assets/images/${imageNames[i]}.jpg`)
    image.setAttribute('class', 'img--small')
    image.addEventListener('click', imageClicked)
    // console.log(image)
    imageGrid.appendChild(image)
}


// 3. Maak plaatjes klikbaar
function imageClicked(event) 
{
    console.log(event)

    // 4. Laat tekst verschijnen als je klikt
    let message = document.getElementById('message')
    
    // 5. Vergelijk plaatjes met elkaar
    let clickedImageSrc = event.target.src
    if (randomImage.src === clickedImageSrc) {
        message.innerText = 'Goed geraden!'
    } else {
        message.innerText = 'Helaas! Probeer het nog eens'
    }   

}









