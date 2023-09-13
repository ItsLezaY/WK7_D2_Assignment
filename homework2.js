//==========Exercise #1 ===========//

/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillo's Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberweis:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


// My Function

for (let [key, value] of Object.entries(person3)) {
    if (Array.isArray(value)) {
        console.log(`${key}:`)
        value.forEach(value => console.log(value))
    } else {
        console.log(`${key}: ${value}`)
    }
}



//=======Exercise #2=========//

/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their info and increment one person's
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age) {
    this.name = name;
    this.age = age;

// Use an arrow function to create the printInfo method

    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

// Create another arrow function for the addAge method that takes a single parameter

    this.incrementAge = (years) => { //increment method takes in (years) parameter
        this.age += years;
    };
}

const Leza = new Person("Leza Younan", 30);
const Kenai = new Person("Kenai Epps", 35);

Leza.printInfo();
Kenai.printInfo(); 

// Adding to the age 
Leza.incrementAge(3);

// print new age
Leza.printInfo(); 




// =============Exercise #3 ============//

/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkStringLength = (inputString) => {
    return new Promise((resolve, reject) => {
        if (inputString.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
};


// big word
checkStringLength("they see cain")
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// small number
checkStringLength("i see abel")
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


