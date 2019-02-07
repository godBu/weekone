let faveDrinks = ['Coke','Fanta','Sprite','Chapman'];
for (let i = 0; i < faveDrinks.length; i++) {
    console.log(faveDrinks[i]);
} 

let faveChoc =['Mars', 'Snickers', 'Dairy Milk', 'Picnic'];
faveChoc.push('Galaxy', 'Dime')
for (let j = 0; j < faveChoc.length; j++) {
    console.log(faveChoc[j]);
}
const thirdChoc = (chocStash) => {
    if (chocStash[2] === 'Dairy Milk') {
        return "Damn right";
    }
    else {
        return "Nope";
    }
};
let isItDairyMilk = thirdChoc(faveChoc);
// console.log(thirdChoc(faveChoc));

console.log(isItDairyMilk);