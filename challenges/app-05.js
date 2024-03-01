const subTotal = 20
const tax = 1

function calculateTotal(subTotal, tax){
    return subTotal + tax

}  

console.log(calculateTotal(subTotal, tax));

let order1 = calculateTotal(100,1)
let order2 = calculateTotal(10,11)
let order3 = calculateTotal(20,5)

console.log(order1,order2,order3)


