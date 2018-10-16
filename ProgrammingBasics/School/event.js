/**
 * Get the necessary elements to edit
 */
let button = document.getElementById('add_button')
let table = document.getElementById('tbody')
let totalPrice = document.getElementById('totalPrice')
let totalPriceValue = 0

/**
 * Add a listener to our button. When you click it, prevent the form from
 * submitting and do what we want it to do.
 */
button.addEventListener('click', function (event) {
    event.preventDefault()

    let productName = document.getElementById('product').value
    let productPrice = document.getElementById('price').value

    /**
     * Calculate a new total price
     */
    totalPriceValue += parseFloat(productPrice)
    totalPrice.innerText = totalPriceValue
    console.log(totalPriceValue)

    /**
     * Create table row and necessary data element
     */
    let tableRow = document.createElement('tr')
    let tableDataName = document.createElement('td')
    let tableDataPrice = document.createElement('td')
    let tableDataRemove = document.createElement('td')

    tableDataName.innerText = productName
    tableDataPrice.innerText = productPrice
    tableDataRemove.innerHTML = '<a href="#">verwijder</a>'

    /**
     * Make sure our links listen to clicks.
     */
    tableDataRemove.addEventListener('click', deleteRow)

    /**
     * Add our table data to our table row
     */
    tableRow.appendChild(tableDataName)
    tableRow.appendChild(tableDataPrice)
    tableRow.appendChild(tableDataRemove)

    /**
     * Put the table row into our DOM
     */
    table.appendChild(tableRow)
})

/**
 * Get the target from our event (<a>), and its parent (<td>) and that parent
 * (<tr>). Then delete that row from our table
 */
function deleteRow(event) {
    let tr = event.target.parentNode.parentNode
    table.removeChild(tr)
}