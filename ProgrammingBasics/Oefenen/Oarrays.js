/* const products = [];
// shopping list inita
products[0] = `tandenborstel`;
products[1] = `deodorant`;
products[2] = `bakmeel`;
products[3] = `wortels`;
products[4] = `tandpasta`;
products[5] = `krop sla`;
products[6] = `maggi`;
products[7] = `croky chips`;
products[8] = `WC papier`;
products[9] = `shampoo`;
console.table(products);

products.push();
products.pop();
*/

// const productList = [`tandenborstel`, `deodorant`, `bakmeel`, `wortels`, `tandpaasta`,
//    `krop sla`, `maggi`, `crocky chips`, `WC papier`, `shampoo`];

// console.log(productList[7]);

// productList.push(`frikandel broodje`);
// // productList.pop();

// console.table(productList);

/*
//forloop
productList.forEach(function (elem, index, myArray) {
    console.log(`element`, elem);
    console.log(`index`, index);
    console.log(`array`, myArray);
})
*/


// for (let i = 0; i < productList.length; i++) {
//     const element = productList[i];
//     console.log(`op index: ${i} staat element: ${element}  `);
// }

/*
const newProductListArray = productList.map(function(element) {
  let newElement =  element.toUpperCase();
    return newElement;
})

console.table(newProductListArray);
*/

/*
let newProductListArray = [];

for (let i = 0; i < productList.length; i++) {
    let numb = i + 1;
    const element = `products ${numb}: ${productList[i]}`;
    newProductListArray.push(element);

}

console.table(newProductListArray);
*/



const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.20];

const totalSum = function (anArray) {
    let totalSum = 0;
    for (let index = 0; index < anArray.length; index++) {
        totalSum = totalSum + anArray[index];

    }
    return totalSum;
}

console.log(totalSum(productPrices));


const average = function(anArray) {
    let newAverage = totalSum(anArray) / anArray.length;
    return newAverage;
}
console.log(average(productPrices))