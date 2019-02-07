let enterNumber = 100
for(let i=2; i<=enterNumber ;i++){

     isPrime = true;

    for(let j=2; j<i; j++){
        if(i%j == 0){
            isPrime = false;
        }
    }
    if(isPrime == true){
        console.log(i);
    }
}