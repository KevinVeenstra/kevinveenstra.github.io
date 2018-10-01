// Opdracht 1 Deelbaar door 4?
for (let number = 1; number <= 25; number++) {
    if (number % 4 == 0) {
        console.log(number + " is deelbaar door 4");
    } else {
        console.log(`${number} is niet deelbaar door 4`);
    }
}


// Opdracht 2 Fibonacci reeks
var fibonacci = []; // Initialize array!

fibonacci[0] = 0;
fibonacci[1] = 1;
for (i = 2; i <= 10; i++) {
    // Next fibonacci number = previous + one before previous // Translated to JavaScript:
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    console.log(fibonacci[i]);
}


// Opdracht 3 nummers uit een array optellen
var sum = [2, 4, 8, 9, 12, 13].reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum);
