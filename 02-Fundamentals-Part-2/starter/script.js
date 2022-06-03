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
