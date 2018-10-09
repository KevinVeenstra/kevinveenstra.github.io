const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

function random_lapTime(lapRounds) {
    return lapRounds[Math.floor(Math.random() * lapRounds.length)];
}

console.log(random_lapTime(lapRounds));


const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

for (var r = 0; r < allMyRecords.length; r++) {
    for (var c = 0; c < allMyRecords[r].length; c++) {
        console.log(allMyRecords[r][c]);
    }
}
