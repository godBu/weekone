const myPin = 2456;
let accountBalance = 10000;

const getCash = (correctPin, appropriateAmount) => {
    if (correctPin == myPin && appropriateAmount < accountBalance) {
        return true
    }
    else if (correctPin != myPin || appropriateAmount >= accountBalance) {
        return false
    }
        
    };

/*const testThis = (correctPin, appropriateAmount) => {
    if (getCash(correctPin, appropriateAmount)) {
        console.log("Money")
    }
    else {
        console.log("Nope")
    }
};*/
console.log(getCash(2456, 7000));