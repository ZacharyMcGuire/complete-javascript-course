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

// Coding Challenge #1
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const checkWinner = (dolphinsAverageScore, koalasAverageScore) => {
    const scoreString = `${dolphinsAverageScore} vs ${koalasAverageScore}`;
    if (dolphinsAverageScore >= 2 * koalasAverageScore) {
        console.log(`Dolphins win! 🏆 (${scoreString})`);
    } else if (koalasAverageScore >= 2 * dolphinsAverageScore) {
        console.log(`Koalas win! 🏆 (${scoreString})`);
    } else {
        console.log(`No one wins! 😭 (${scoreString})`);
    }
    return;
}

let dolphinsAverageScore = calcAverage(44, 23, 71);
let koalasAverageScore = calcAverage(65, 54, 49);

checkWinner(dolphinsAverageScore, koalasAverageScore);

dolphinsAverageScore = calcAverage(85, 54, 41);
koalasAverageScore = calcAverage(23, 34, 27);

checkWinner(dolphinsAverageScore, koalasAverageScore);

// LECTURE: Arrays
const populations = [24, 1441, 14, 627]
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(24),
    percentageOfWorld1(1441),
    percentageOfWorld1(14),
    percentageOfWorld1(627)
]
console.log(percentages);
