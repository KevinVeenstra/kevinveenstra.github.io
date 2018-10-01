function fibonacci(num) {
    var fibonacci = []; // Initialize array!

    fibonacci[0] = 1;
    fibonacci[1] = 0;
    for (i = 2; i <= num; i++) {
        // Next fibonacci number = previous + one before previous // Translated to JavaScript:
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        console.log(fibonacci[i]);
        
    }
    return "the fibonacci reeks tot en met positie: " + num;
}

console.log(fibonacci(10));

//----------------------------------

/*
function countdown(seconds) {
    for (let s = seconds; s > 0; s--) {
        console.log(`T-` + s + ` seconds to liftoff!`);
    }
    return `LIFT OFF!`;
}

console.log(countdown(10));
*/

var i = 10;
function countDown() {
    var countdownTimer = setInterval(function() {
        console.log(i);
        i = i - 1;
        if (i <= 0) {
            clearTimeout(countdownTimer);
            console.log('HAPPY ' + new Date().getFullYear());
        }
    }, 1000);
}
countDown();