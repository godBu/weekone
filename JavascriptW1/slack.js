// combine words

let word1 = "apple ";
word2 = "pie";
word3 = word1 + word2
const combineWord = (word1, word2) => {
    return word3;
};
console.log(combineWord(word1, word2));

// maximum number

let num1;
let num2;
const maxNumber = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    } 
};
console.log(maxNumber(8, 9));

// minimum number
 let num3;
 let num4;
 const minNumber = (num1,num2) => {
     if (num1 < num2) {
         return num1;
     }
     else {
         return num2
     }
 };
 console.log(minNumber(15, 10));

 // grades

const gradeScores = (score) => {
    if (score >= 0 && score <= 59) {
        return "F";
    }
    else if (score >=60 && score <= 69) {
        return "D";
    }
    else if (score >= 70 && score <= 79) {
        return "C";
    }
    else if (score >= 80 && score <= 89) {
        return "B";
    }
    else {
        return "A";
    }
};
console.log(gradeScores(87));

// equal numbers
let num5;
let num6;
const equalNumbers = (num5, num6) => {
    if (num5 === num6) {
        return true;
    }
    else {
        return false
    }
}
console.log(equalNumbers(9, 9));

// increase reviews
let reviews;
const increaseReviews = (reviews) => {
    if (reviews == 0) {
        return 1;
    }
    else {
        return ++reviews;
    }
}
console.log(increaseReviews(1));

