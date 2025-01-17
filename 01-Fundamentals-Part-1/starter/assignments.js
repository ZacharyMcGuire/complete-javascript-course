// LECTURE 10: Values and Variables
const country = "Australia";
const continent = "Australia";
let population = 25690000;

console.log(country);
console.log(continent);
console.log(population);

// LECTURE 12: Data Types
const isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE 13: let, const & var
language = "English";

// LECTURE 14: Basic Operators
const halfOfPopulation = population / 2;
console.log(halfOfPopulation);

population++
console.log(population);

const finlandPopulation = 6000000;
console.log(population > finlandPopulation);

const averagePopulation = 33000000;
console.log(population < averagePopulation);

let description = country + " has a population of " + population / 1000000 + " million people, who primarily speak " + language;
console.log(description);

// LECTURE 17: String and Template Literals
description = `${country} has a population of ${population / 1000000} million people, who primarily speak ${language}`;
console.log(description);

// LECTURE 18: Taking Decisions: If/Else Statements
if (population > averagePopulation) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${(averagePopulation - population) / 1000000} million below average`)
}

// LECTURE 20: Type conversion and coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// LECTURE 22: Equality Operators
// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
const numNeighbours = 0;
if (numNeighbours === 1) {
    console.log("One 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}

// LECTURE 24: Logical operators
if (language === "English" && population < 50000000 && !isIsland) {
    console.log("Sarah should live here!");
} else {
    console.log("Sarah should not live here...");
}

// LECTURE 26: Switch statement
switch (language.toLowerCase()) {
    case "chinese" || "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("4th place");
        break;
    case "arabic":
        console.log("5th place");
        break;
    default:
        console.log("Great language too! :D");
}

// LECTURE 28: Ternary operator
console.log(`${country}'s population is ${population > averagePopulation ? "above" : "below"} average`)
