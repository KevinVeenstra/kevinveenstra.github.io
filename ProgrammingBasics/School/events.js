let button = document.getElementById("add.button");
let table = document.getElementById("tbody")
let totalPrice = document.getElementById("totalPrice")

button.addEventListener("click", function (event) {
    event.preventDefault()

    let productName = document.getElementById("product").value
    let productPrice = document.getElementById("price").value


    let tableRow = document.createElement("tr")
    let tableDataName = document.createElement("td")
    let tableDataPrice = document.createElement("td")
    let tableDataRemove = document.createElement("td")

    tableDataName.innerText = productName
    tableDataPrice.innerText = productPrice
    tableDataRemove.innerHTML = "<a href=#>verwijder</a>"

    tableDataRemove.addEventListener("click", deletRow)

    tableRow.appendChild(tableDataName)
    tableRow.appendChild(tableDataPrice)
    tableRow.appendChild(tableDataRemove)

    table.appendChild(tableRow)

})

function deletRow(event) {
    let tr = event.target.parentNode.parentNode
    table.removeChild("tr")
}


