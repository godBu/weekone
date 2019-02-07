let fibSequence = [0, 1, 1, 2];
for (let i = fibSequence.length-2; i <= 6; i++) {
    (fibSequence.push(fibSequence[i]+fibSequence[i+1]));
};
console.log(fibSequence);