'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;

if(hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;

//Functions
function logger(){
    console.log('My name is Seven');
}

//calling / running / invoking functions
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

//invoke
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

///Functon Dclarations Vs. Expressions

function calcAge1(birthYear){
    const age = 2037 - birthYear;
    return age;
}

// invoke call the function
//function declaraion
const age1 = calcAge1(1994);
console.log(age1);

//function expression // its a function without a name, just store it in a variable
const calcAge2  = function (birthYear){
    return 2037 - birthYear;
}

//call the function
const age2 = calcAge2(1994);
console.log(age1, age2);


//


//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const Age3 = calcAge3(1994);
console.log(Age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Seven'));
console.log(yearsUntilRetirement(1988, 'Kris'));


function cutFruitPieces (fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces= cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));


const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        return retirement;
    } else {
        return -1;
    }
    
    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Seven'));
console.log(yearsUntilRetirement(1970, 'Mike'));

//Challenge 1

const calcAverage = (a, b, c) => (a + b + c) / 3;
//console.log(calcAverage(3, 4, 5));

//Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins Win! (${avgDolphins} vs. ${avgKoalas})`);
    } else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas Win! (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }  
}
 checkWinner(scoreDolphins, scoreKoalas);
 checkWinner(578, 99);

 //Test Data 2
 scoreDolphins = calcAverage(85, 54, 41);
 scoreKoalas = calcAverage(23, 34, 27);
 console.log(scoreDolphins, scoreKoalas);
 checkWinner(scoreDolphins, scoreKoalas);

 //Arrays

 //No(this is storing variables and shows why arrays are better)

 const friend1 ='Michael';
 const friend2 ='Steven';
 const friend3 ='Peter';

 //this is better
 const friends = ['Michael', 'Steven', 'Peter'];
 console.log(friends);

 //another way to create an array
 const y = new Array(1991, 1984, 2007, 2020);
// console.log(years);

 //print out specific parts
 console.log(friends[0]);
 console.log(friends[2]);

 //find length of array
 console.log(friends.length);
 console.log(friends[friends.length - 1]);

 //change/mutate one of the vaibles in the array although its a const, it can be mutated because its not primitive
 //but cant mutate the entire array because its a const, can only change somethings but not all at once

 friends[2] = 'Jesse';
 console.log(friends);

 const firstName = 'Seven';
 const seven = [firstName, 'Sosa', 2024 - 1994, 'coder', friends];
 console.log(seven);
 console.log(seven.length);
 
 //Exercise
 const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const years = [ 1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years[0]));
// console.log(calcAge(years[3]));
// console.log(calcAge(years[4]));

//or store themas variables and then print
const age1 = (calcAge(years[0]));
const age2 = (calcAge(years[3]));
const age3 = (calcAge(years[4]));
console.log(age1, age2, age3);

//can do this to
const ages = [calcAge(years[0]), calcAge(years[3]), calcAge(years[years.length - 1])];
console.log(ages);


//Basic Array Methods

//push method to add elements at the end of an array
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//unshift method to add elements in the beginning of an array
friends.unshift('John');
console.log(friends);

//pop method to remove elements from an array
friends.pop(); //Removes last element
const popped = friends.pop(); //This tells you the length cause you stored it as a variable
console.log(popped);
console.log(friends);

friends.shift(); //Takes out the first element in the array
console.log(friends);

console.log(friends.indexOf('Steven'));// find the index of an element
console.log(friends.indexOf('Bob')); // this not apart of the array so when you try to find the index of an element that
                                    //does not exist, it will return -1.

//ES6 method "includes" instead of rturning the index of the element it will just simply return true
//if the element is in the array and false if its not
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'));

//the arguments are implict which means it does not do type coercion
//so friends.push(23); console.log(friends.include('23)) will be false because in the original function method
//it was a number and not a string and it will not convert it.

//using if statements with these methods

if(friends.includes('Steven')){
    console.log('You have a friend named Steven');
}


//Dot. Vs Bracket

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

//getting a property from an object (The Dot Notation)
console.log(jonas.lastName);

//Bracket notation
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);// we can put any expression within the square brackets
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]);

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!Choose between firstName, lastName, age, job, and friends');
}

//to add new properties to the object

jonas.location = 'Portugal';
jonas['Twitter'] = '@jonasschmedtman';
console.log(jonas);

//Challenge
//'Jonas has 3 friends, and his best friend is named Michael'
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is named ${jonas.friends[0]}.`);//My solution
//I got it right, Jonas did it the same way. 


//Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){// adding a function in the object
    //     return 2037 - birthYear;
    // }

    // calcAge: function(){
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    
getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' 
        :  'no'} driver's license.`;
}

};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


//console.log(jonas.calcAge(1991));//Calling the function and pasing a birthYear value through it because thats the original parameter that it takes
//console.log(jonas['calcAge'](1991));//calling the function using bracket notation

//Challenge
//'Jonas is a 46 year old teacher and he has a driver's license or no
//console.log(`${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.job}, and he has a drivers licencse ${hasDriversLicense || !hasDriversLicense}`);
console.log(jonas.getSummary());



//Iteration: The For Loop
// console.log('Lifting weights repetition 1 🏋️');
// console.log('Lifting weights repetition 2 🏋️');
// console.log('Lifting weights repetition 3 🏋️');
// console.log('Lifting weights repetition 4 🏋️');
// console.log('Lifting weights repetition 5 🏋️');
// console.log('Lifting weights repetition 6 🏋️');
// console.log('Lifting weights repetition 7 🏋️');
// console.log('Lifting weights repetition 8 🏋️');
// console.log('Lifting weights repetition 9 🏋️');
// console.log('Lifting weights repetition 10 🏋️');

//for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

//Looping Backwards and Loops In Loops

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'], 
    true
];

const types = [];

for(let i = 0; i < jonas.length; i++){
    //reading from The Jonas Array
    console.log(jonas[i], typeof jonas[i]);
    //filling types array
    //types[i] = typeof jonas[i];

    types.push(typeof jonas[i]);
}

console.log(types);

const birthYears = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < birthYears.length; i++){
    ages.push(2037 - birthYears[i]);
} 
console.log(ages);

//continue and break statements

//continue

console.log('------ONLY STRINGS------');
for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

//break

console.log('------BREAK WITH NUMBERS------');
for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}


//Looping Backwards and Loops in Loops
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'], 
];

//looping backwards starting at 4 until 0
for(let i = jonas.length - 1; i >= 0; i--){
    console.log(i, jonas[i]);
}

//Loops Within Loops
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`-----STARTING exercise ${exercise} `);


for(let rep = 1; rep < 6; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️`);
    }
}


//While-Loop

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
//     }

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`FOR LOOP: Lifting weights repetition ${rep} 🏋️`);
// }

// let rep = 1;
// while(rep <= 10){
// console.log(`WHILE-LOOP: Lifting weights repetition ${rep} 🏋️`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if(dice === 6) console.log('Loop is about to end...');
}


//Challenge 4

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);

  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

console.log('I am the best programmer, Talk to yo momma and not to me :}}');

const x = 23;
console.log('Tell me');
console.log('Look over here come follow me');
console.log(`Tell me, how'd get that in those jeans?`);


//trying in video challenge alone again(needed help a tad bit)
//"Jonas is a 46-year ol teacher, and he has a drivers license."

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());
*/
