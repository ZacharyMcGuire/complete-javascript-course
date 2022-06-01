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
