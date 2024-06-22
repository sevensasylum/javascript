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

console.log(descFinland, descChina, descWashington);

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
*/

//Coding Challenge 2
/*Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  

console.log(calcTip(100));
console.log(calcTip(68));
console.log(calcTip(99));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills);
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

//Introduction to Arrays
function percentageOfWorld1(population){
    return (population/7900) * 100;
}  

const populations = [5522, 3322, 355, 690];

console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
    console.log(percentages);


//Basic Array Operations(Methods)
const neighbours = ['United States', 'China', 'Europe'];//Good
console.log(neighbours);

neighbours.push('Utopia');//Good
console.log(neighbours);

neighbours.pop();//Good
console.log(neighbours);

if(!neighbours.includes('Germany')){
    console.log('Probably not a central european country ;D');
}
console.log(neighbours.indexOf('China'));//Index 1

neighbours[neighbours.indexOf('China')] = 'Germany'; // this is how Jonas did it
//neighbours[1] = 'Germany';//Changing Index 1 'China' to 'Germany'
console.log(neighbours);



//CHALLENGE #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
         this.bmi = this.mass / (this.height * this.height);
        return this.bmi;

    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
     return this.bmi;
    }

};

mark.calcBMI();
john.calcBMI();

//console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
  }

    //Introduction to Objects

const myCountry = {
    country: 'United States',
    capitol: 'Washington D.C.',
    language: 'English',
    population: 333,
    neighbours: ['Cuba', 'United Kingdom', 'Canada'],

    describe: function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} 
neighbouring countries and a capitol called ${this.capitol}`;
    },

    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
}

}

//Dot Vs. Bracket Notation
//Using the object from the previous assignment, log a string like this to the console: 
//'United States has 333 million english-speaking people, 3 neighbouring countries and a capital 
//called Washignton D.C.'.

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking
people, ${myCountry.neighbours.length} neighbouring countries and a capitol called
${myCountry.capitol}`);

myCountry.population +=2;
console.log(myCountry.population);

myCountry.population -=2;
console.log(myCountry.population);

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry)


//Iteration: The for Loop
// for(let voters = 1; voters <= 50; voters++){
//     console.log(`Voter number ${voters} is currently voting...🗳️`);
//  }

//Looping Arrays, Breaking and Continuing

// const populations = [22, 32, 355, 690]; 
// const percentages2 = [];

// for(let i = 0; i < populations.length; i++){
//     const perc = percentageOfWorld1(populations[i]);
//         percentages2.push(perc);
// }

// console.log(percentages2); 

const populations = [10, 1441, 332, 83];
const percentages2 = [];

function percentageOfWorld1(population){
    return (population/7900) * 100;
}  


for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);


//Looping backwards and Loops in Loops

const listOfNeighbours = [
    ['Canada','Mexico'],
    ['Spain'] ,
    ['Norway','Sweden','Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
      console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

*/

//Challenge 2 Arrays
/*Steven wants you to improve his tip calculator,
using the same rules as before — 
tip 15% of the bill if the bill value is between 50 and 300, 
and if the value is different, the tip is 20%.

Your tasks:
1. Write a function calcTip that takes any bill value as an input and 
returns the corresponding tip, calculated based on the rules above 
(you can check out the code from the first tip calculator challenge 
if you need to). Use the function type you like the most. 
Test the function using a bill value of 100.

2. And now let's use arrays! So, create an array called bills 
containing the test data below. 

3. Create an array called tips containing the tip value for each bill, calculated from 
the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.
TEST DATA: 125, 555, and 44.// SECOND TRY ON MY OWN AND GOT IT

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);*/

//Challeng 3: Second try on my own(needed help but for the most part understand)
/* Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! 
Remember: BMI = mass / (height * height) 
(mass in kg and height in meters).

Your tasks:

1. For each of them, create an object with properties for their full name, 
mass, and height (Mark Miller and John Smith). Name these objects as 
mark and john, and their properties exactly as fullName, mass and height.

2. Create a calcBMI method on each object to calculate the BMI 
(the same method on both objects). Assign the BMI value to a 
property called bmi (lowercase), and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name 
and the respective BMI. Example: "John Smith's BMI (28.3) is higher 
than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. 
John weighs 92 kg and is 1.95 m tall.

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark, john);

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher 
than ${john.fullName}'s (${john.bmi})!`);
} else if (mark.bmi < john.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}*/
