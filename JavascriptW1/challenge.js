const priceOfFlower = 0.62;
let numberOfFlowers = 12;


if((priceOfFlower * numberOfFlowers).toFixed(2) == 7.44) {
	console.log("making transaction")
} else if (priceOfFlower * numberOfFlowers != 7.44) {
	console.log("transaction failed")
}