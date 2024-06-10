///////Values & Variables//////

// const country = 'United States'; //correct
// const continent = 'North America'; //correct
// let  population = 333; //correct

// console.log(country); //correct
// console.log(continent); //correct
// console.log(population); //correct


/////Data Types///////

// let isIsland = false; //correct
// let language; //correct
// isIsland = true; //correct
// console.log(typeof isIsland); //correct
// console.log(typeof population); //correct
// console.log(typeof country); //correct
// console.log(typeof language); //correct

///////let, const, and var//////

//language = 'English'; //correct

///////Basic Operators//////

//1.
//console.log(population/2); //correct

//2.
//population++; //correct
//console.log(population); //correct

//3.
//console.log(country > 6); //correct

//4.
//console.log(country <= 33); //correct

//5.
// const description = country + ' is in ' + continent + ', and its ' + 
// population + ' million people speak ' + language + '.'; //correct

// console.log(description); //correct

//Strings and Template Literals
//recreate description into template literal.

//const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`; 
//correct

//console.log(description1); //correct

//Taking if/else statements

// const country = 'United States'; //correct
// const continent = 'North America'; //correct
// let  population = 15; //correct

// if(population > 33){
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country} population is ${(33 - population)/2} million below average.`);

// }

//Type conversion and Type Coercion
//Predict the result of these 5 operations without executing them

// console.log('9' - '5'); //->  4
// console.log('19' - '13' + '17'); //-> '617'
// console.log('19' - '13' + 17); //-> 23
// console.log('123' < 57); //-> false
// console.log(5 + 6 + '4' + 9 - 4 - 2); //-> 1143

//Equality Operators: == Vs. ===

//1.
// const numNeighbours = Number (prompt('How many neighbour countries does your country have?'));
// //correct!

// //2.
// if(numNeighbours === 1){
//     console.log('Only  1 border!'); //correct!
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border.'); //correct!
// } else {
//     console.log('No Borders!'); //correct!
// }


//Logical Operators
// const country = 'United States'; 
// const continent = 'North America'; 
// let  population = 33; 
// let isIsland = false; 
// let language;
// language = 'English';

// if(language === 'English' && population < 50 && !isIsland){
//     console.log(`You should live in the ${country}!`);
// } else {
//     console.log(`${country} does not meet your criteria!`);
// }

//The Switch Statement
// const language = 'mandarin';

// switch(language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('Most number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers!');
//         break;
//     case 'english':
//         console.log('3rd place!');
//         break;
//     case 'hindi':
//         console.log('Number 4!');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language!');
//         break;
//     default:
//         console.log('Great language too :D.');
// }

