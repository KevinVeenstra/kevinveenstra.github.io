let superPlane = new airplane("007", 45)
let jarno = new passenger("jarno", 45, this)
let ricardo = new passenger("ricardo", 46, new airplane("747", 798))

superPlane.board(jarno)
superPlane.board(ricardo)

let passengers = new airplane("007", 2).getPassengers()
console.log(passengers)

let planeOne = new airplane("505", 3)
planeOne.getPassengers();

let planeTwo = new airplane("606", 5)
planeTwo.getPassengers();