const myPin = 1579;
const getPin = (pinAttempt) => {
    if (pinAttempt == myPin) {
        return "pin accepted";
    }
    else {
        return "retry";
    }
}

let accountBalance = 10000;
const getCash = (withdrawalAmount) => {
    if (withdrawalAmount < accountBalance) {
        return "transaction complete";
    }
    else {
        return "insufficient funds";
    }
}
console.log(getPin(1599));
console.log(getCash(20000));
/* const testThis = (pinAttempt) => {
    if (getPin(pinAttempt)) {
        console.log("Proceed")
    }
    else {
        console.log("Nope")
    }
}
const testThis2 = (withdrawalAmount) => {
    if (getCash(withdrawalAmount)) {
        console.log("Success")
    }
    else {
        console.log("Insufficient funds")
    }
}

testThis(1579)
testThis2(9000) */
