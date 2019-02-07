const myPin = 1234;
let accountBalance = 5000;

const getCash = (pinAttempt, withdrawalAmount) => {
    if (pinAttempt == myPin && withdrawalAmount < accountBalance) {
        return true;
    } 
    else if (pinAttempt != myPin || withdrawalAmount >= accountBalance) {
        return false;
    }
};

const testThis = (pinAttempt, withdrawalAmount) => {
    if (getCash(pinAttempt, withdrawalAmount)) {
        console.log("Moneyyyyyy");
    }
    else {
        console.log("Fuck off");
    }
};

testThis(1234, 5000);
