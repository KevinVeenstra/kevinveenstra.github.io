/* number = 0;

while (number < 10) {
    number++;
    console.log(number);
}

let message = 'Het is maandag';
var i = -1;

while(i<=message.length){
	i++;
	console.log(message.charAt(i));		
}


for (let i = 1; i < 11; i++ ) {
    console.log(i)
}

const message = "Het is maandag";

for (let i = 0; i < message.length; i++) {
    console.log(message.charAt(i));
}
*/

//var /let
//var is function scoped
//let is block scoped {}

for (let number = 1; number <= 25; number++) {
    if (number % 4 ==0) {
        console.log(`${number} is deelbaar door 4`);
    } else {
        console.log(`${number} is niet deelbaar door 4`);
    }
}

var myArray = [];

for (var i = 1; i < 6; i++) {
  myArray.push(i);
  console.log(i);
}