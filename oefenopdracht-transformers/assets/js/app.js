a = 0
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
];

// laad de plaatjes in random volgorde // shuffle array
shuffleArray(imagez)

function shuffleArray(imagez) {
    for (var a = imagez.length - 1; a > 0; a--) {
        var j = Math.floor(Math.random() * (a + 1));
        var temp = imagez[a];
        imagez[a] = imagez[j];
        imagez[j] = temp;
    }
 }

// laad de plaatjes op de pagina
let transformerImages = document.getElementById('images')
for (i = 0; i < imagez.length; i++) {

    let newImage = document.createElement('img');
    newImage.setAttribute('src', `./assets/images/${imagez[i].source}`)
    newImage.setAttribute('id', imagez[i].position)
    newImage.setAttribute('class', 'images')
    newImage.addEventListener('click',imageClicked)
    transformerImages.appendChild(newImage) 
}

var counter = 1;
// maak de plaatjes clickbaar
function imageClicked(event) 
{
    
    console.log(event)

}


// vergelijk de volgorde

// poging timer

// eind resultaat
