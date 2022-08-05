'use strict';

// LECTURE: Functions

function describeCountry (country, population, capitalCity) {
    const msg = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
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

// LECTURE: Basic array operations
const neighbours = ['Australia', 'China', 'New Zealand', 'France', 'Sweden'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) console.log("Probably not a central European country");

const i = neighbours.indexOf("Sweden");
neighbours[1] = "Republic of Sweden";
console.log(neighbours);

// Coding Challenge #2
const calcTip = function (bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
]
console.log(tips);

const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]
console.log(total);

// LECTURE: Objects
const myCountry = {
    country: 'Australia',
    capital: 'Canberra',
    language: 'English',
    population: 24,
    neighbours: ['China', 'New Zealand', 'France', 'Sweden']
}
console.log(myCountry);

// LECTURE: Dot vs Bracket notation
console.log(
    `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
)

myCountry.population += 2;
console.log(myCountry);

myCountry['population'] -= 2;
console.log(myCountry);

// CHALLENGE
// "Jonas is a 46-year-old teacher, and he has a driver's license"

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: '1991',
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${jonas.firstName} is a ${jonas.calcAge()}-year-old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license"`
    }
};

console.log(jonas.getSummary())

// Coding Challenge #3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        console.log(this.mass, this.height)
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}


const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        console.log(this.mass, this.height)
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}

console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is ${
        john.BMI > mark.calcBMI() ? 'higher' : 'not higher'
    } than ${mark.fullName}'s (${mark.BMI})!`
)
