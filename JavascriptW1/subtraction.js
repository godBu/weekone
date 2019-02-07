const subtractionProcess = (num1, num2) => {
    if (num2 > num1) {
        return num2 - num1;
    }
    else {
        return num1 - num2;
    }
};

console.log(subtractionProcess(1000, 4000));
