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
 checkWinner(scoreDolphins, scoreKoalas);*/

 