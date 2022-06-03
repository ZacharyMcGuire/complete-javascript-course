'use strict';

// LECTURE: Functions

function describeCountry (country, population, capitalCity) {
    const msg = `${country} has ${population} million people and its capitcal city is ${capitalCity}.`;
    return msg;
}

const australia = describeCountry('Australia', 24, 'Canberra');
const canada = describeCountry('Canada', 37, 'Ottawa');
const france = describeCountry('France', 66, 'Paris');

console.log(australia, canada, france);

// LECTURE: Function declarations vs. function expressions
function percentageOfWorld1 (population) {
    return (population / 7900) * 100;
}

let chinaPopulationPercentage = percentageOfWorld1(1441);
let australiaPopulationPercentage = percentageOfWorld1(24);
let newZealandPopulationPercentage = percentageOfWorld1(14);
console.log(chinaPopulationPercentage, australiaPopulationPercentage, newZealandPopulationPercentage);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

chinaPopulationPercentage = percentageOfWorld2(1441);
australiaPopulationPercentage = percentageOfWorld2(24);
newZealandPopulationPercentage = percentageOfWorld2(14);
console.log(chinaPopulationPercentage, australiaPopulationPercentage, newZealandPopulationPercentage);

// LECTURE: Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;
console.log(percentageOfWorld3(1441));

// LECTURE: Functions calling other functions
const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world population.`;
}

console.log(
    describePopulation('Australia', 24),
    describePopulation('China', 1441),
    describePopulation('New Zealand', 14)
)
