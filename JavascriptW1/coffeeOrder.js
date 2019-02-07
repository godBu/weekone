
const coffeeOrder = (size, type, strength, customerName) => {
    console.log(`Delivering ${strength} and ${size} ${type} to ${customerName}`)
}

const costaOrder = (size, type, strength, customerName) => {
    console.log(`Delivered: ${strength} and ${size} ${type} to ${customerName}`)
}

coffeeOrder ("large", "latte", "strong", "Charls" )
costaOrder ("small", "cappucino", "medium", "Frenkie")

