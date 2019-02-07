let day = "bad";
let insult;



let person = {
    name: 'Chiebuka Mbata',
    averageDay: "Let's keep it moving",
    badDay: "Is this real life?",
    age: 27,
    sayHi () {
        return `hello, my name is ${this.name}`;
    }
}

console.log(person.sayHi());

/* if (day == "bad"){ 
    insult = person.badDay;
    console.log(insult);
}
else if (day == "avg") { 
    insult = person.averageDay;
    console.log(insult);

}

person.faveSongs = ['Michael Jackson - Dirty Diana', 'Savage Garden - Truly, Madly, Deeply', 'Wiz Khalifa - Teach you to fly'];

console.log(person.faveSongs);



console.log(person['name']);
console.log(person.age); */
