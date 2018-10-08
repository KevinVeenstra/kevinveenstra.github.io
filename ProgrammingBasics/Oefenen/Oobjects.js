let me = {
    name: `Kevin Veenstra`,
    age: 33,
    previousDiploma: `MBO2`,
    adres: `Henry Dunantlaan 198`,
    bewonersEnHuisdieren: 4,
    namenBewoners: [`Kevin`, `Ni-cole`],
    namenHuisdieren: [`Balthazar`, `Nivin`],
    favoriteTransport: {
        name: `car`,
        amountOfWheels: 4
    },
    logFavoriteVehicle: function () {
        console.log(`My favorite transport is a ${me.favoriteTransport.name} and it has ${me.favoriteTransport.amountOfWheels} wheels`);
    },
    logNamenBewoners: function () {
        for (i = 0; i < me.namenBewoners.length; i++) {
            console.log(me.namenBewoners[i]);
        }
    },
    forEach: function () {
        me.namenBewoners.forEach(function (element) {
            console.log(element);
        })
    }

}


me.currentStudy = `HBO-ICT`,
    me.hobby = `playing Games`,
    me.leeftijdBewoners = [33, 29];




/*
console.log(`My favorite transport is a ` + me.favoriteTransport.name + ` and it has ` + me.favoriteTransport.amountOfWheels + ` wheels`);
console.log(`My favorite transport is a ${me.favoriteTransport.name} and it has ${me.favoriteTransport.amountOfWheels} wheels`);
for (i = 0; i < me.namenBewoners.length; i++) {
    console.log(me.namenBewoners[i]);
}

me.namenBewoners.forEach(function(element) {
console.log(element);
})

console.table(me);
*/


me.logFavoriteVehicle();
me.logNamenBewoners();
me.forEach();

