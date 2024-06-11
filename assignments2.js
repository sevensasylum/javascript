'use strict';

//Fundamentals Part 2 Assignments
/*
//Functions
function describeCountry(country, population, capitalCity){
    return (`${country} has ${population} million people and its capital city is ${capitalCity}.`);
}

const descFinland = describeCountry('Finland', 6, 'Helskinki');
const descChina = describeCountry('China', 32, 'Hong Kong');
const descWashington = describeCountry('United States', 100, 'Washington, D.C');

console.log(descFinland, descChina, descWashington);*/

// Function Declarations Vs. Expressions

//Function Declaration
function percentageOfWorld1(population){
    return (population/7900) * 100;
}

// const countryAlgeria = percentageOfWorld1(4500);
// const countryColombia = percentageOfWorld1(2200);
// const countryEgypt = percentageOfWorld1(700);

// console.log(countryAlgeria, countryColombia, countryEgypt);

//Function Expression
// const percentageOfWorld2 = function(population){
//     return (population/7900) * 100;
// }

// const countryFiji = percentageOfWorld2(4500);
// const countryGhana = percentageOfWorld2(2200);
// const countryIraq = percentageOfWorld2(700);
// console.log(countryFiji, countryGhana, countryIraq);

//Arrow Function
// const percentageOfWorld3 = population => (population / 7900) * 100;

// const countryAlgeria = percentageOfWorld3(4500);
// const countryColombia = percentageOfWorld3(2200);
// const countryEgypt = percentageOfWorld3(700);
// console.log(countryAlgeria, countryColombia, countryEgypt);

//Functions Calling Other Functions



const describePopulation = function(country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
  };

describePopulation('United States', 445);
describePopulation('Australia', 667);
describePopulation('Brazil', 3352);



