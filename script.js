/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Seven');
console.log(29);

let firstName = "Seven";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let seven_jonas = 'SJ';


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Seven with the Mac11");

//Reassigning the type
javascriptIsFun = "Changed";
console.log(typeof javascriptIsFun);

//Undefined values
let year;
let age;

console.log(year)// Undefined
console.log(age)//Undefined
console.log(typeof year);
console.log(typeof age);

//Assign Value

year = 1994;
age = 29;

console.log(typeof year);
console.log(typeof age);


// Let, Const, & Var

let age = 29;
age = 30;

const birthYear = 1994; 

var age = 29;
age = 30;

console.log(age);

//Basic Operators (Arithmatic) *, +, /, -

const current = 2024;
const ageSeven = current - 1994;
const ageMary = current - 2019;
console.log(ageSeven, ageMary);

console.log(ageSeven * 3, ageMary/ 7, ageSeven + ageMary, 2 ** 3);
//2 ** 3 is 2 to the power of 3 which = to 8

//The "+" operator can be used in math or to concatenate strings together
//Concatenate using the + operator.
const firstName = 'Seven';
const lastName = 'Sosa';

console.log(firstName + ' ' + lastName);

let x = 10 + 5;// 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // adding by 1
x--; // subtracting by 1
x--;
console.log(x);

// Comparison operations >, >=, <=, <
console.log(ageSeven < ageMary);
console.log(ageMary >= 18);

// store results its a boolean 
const isFullAge = ageMary >= 18;
console.log(current - 1991 > current - 2019); // so the way the program reads this line of code,
// it wont just do it from left two right, it will do the substraction pn the ,left first and then the right an d then it will compare the results > using that operator.

// Operator Precesdance
const current = 2024;
const ageSeven = current - 1994;
const ageMary = current - 2019;

console.log(current - 1991 > current - 2019);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

// Find the average

const averageAge = ageSeven + ageMary / 2;
console.log(ageSeven, ageMary, averageAge);

//challenge 1 that I answered on Udemys Platform:

//this is "True"
//const massMark = 78;
//const massJohn = 92;    
//const heightMark = 1.69;
//const heightJohn = 1.95;

//this is "False"
const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;
      
const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn * heightJohn);
      
const markHigherBMI = BMIMark >= BMIJohn;
      
console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);

//Strings and Template Literals
const firstName = 'Seven';
const job = 'teacher';
const birthYear = 1994;
const currentYear = 2037;

//This is concatenating strings together
const seven = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';

//This one is Template Literal and better way.

const sevenNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;

console.log(seven);
console.log(sevenNew);

//Multi-line strings *use have to use backticks.
console.log(`String with\n\
multiple\n\
lines`);

 //Same thing as above except just press enter for new line.
 console.log(`String
multi-line
lines`);

// Taking decisions and If Else Statements

const age = 19;
const isOldEnough = age >= 18;

if(isOldEnough) {
console.log('Sarah can start driving license 🚗');
} else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

another way: writing the condition directly in

const age = 19;

if(age >= 18){
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}


const birthYear = 1999;
let century;

if(birthYear <= 2000){
     century = 20;
} else {
     century = 21;
}

console.log(century);

const massMark = 78;
const massJohn = 92;    
const heightMark = 1.69;
const heightJohn = 1.95;


// const massMark = 95;
// const massJohn = 85;
// const heightMark = 1.88;
// const heightJohn = 1.76;
      
const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn * heightJohn);
      
const markHigherBMI = BMIMark >= BMIJohn;
      
console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);

//challenge 2
//create if else and template literal to say "Mark's BMI (28.3) is higher than John's (23.9)"

if(BMIMark > BMIJohn){
    console.log("Mark's BMI is higher than John's!") // supposed to add template here for challenge but see comments below***
}else{
    console.log("John's BMI is higher than Mark's!")
}

//Template Literal
console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`); 
//and vice versa, Im supposed to change it in the if else statement but for me to understand my comments I will leave it as is!

//type conversion from one type to another using the "Number" function to convert and String and Boolean
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Seven'));// Results to NaN: Invalid number
console.log(typeof NaN);// Typeof is of number but its just an invalid number

console.log(String(23));

//Type coercion

console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');//This is the same thing as the one above because it converts it to a string because of type coercion.

console.log('23' - '10' - 3); converted to numbers
console.log('23' * '2'); converted to numbers

let n = '1' + 1; // this concatenates to 11 and then subtracts 1 and results 10. It didnt stay a string because subtraction is not a concatenating string converter.
n = n - 1; 
console.log(n);

//Truthy and Falsy Values
//5 falsy values: 0, '', undefined, null, NaN


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Seven'));
console.log(Boolean({}));


const money = 0; //<-- this is a falsy value so thats why it executes the else block because its an automatic FALSE!
if(money){// change the 0 to 100
    console.log("Don't spend it all!");
}else {
    console.log("You should get a job!");
}

let height;// this is an undefined variable so its FALSE and will excute the else block
if(height){
    console.log('YAY! Height is defined');
}else {
    console.log('Height is UNDEFINED');
}

//Equality Operators == vs ===

const age = 18;
if(age === 18) console.log('You just became an adult :D (strict)');

if(age == 18) console.log('You just became an adult :D (loosey)');

const favorite = Number (prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if(favorite == 33) {
    console.log('Cool! 33 is a spiritual number!');
} else if(favorite === 7) {
    console.log('7 is also a spiritual number');
}else if(favorite === 9){
    console.log('9 is also a spiritual number');
} else {
    console.log('Number is not 33 nor 7 nor 9')
}

if(favorite !== 33) console.log('Why not 33?');

//Boolean Logic

const hasDriverLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision);//AND
console.log(hasDriverLicense || hasGoodVision);//OR
console.log(!hasDriverLicense);//NOT

const shouldDrive = hasDriverLicense && hasGoodVision;//normally we put the condition in the parenthesis!

// if(hasDriverLicense && hasGoodVision){
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false;//C
console.log(hasDriverLicense && hasGoodVision || isTired);

if(hasDriverLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const day = 'tues';

switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :P');
        break;
    default:
            console.log('Not a valid day!');
}

if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if( day === 'tuesday'){
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples');
} else if( day === 'friday'){
    console.log('Record videos');
} else if ( day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :P');
} else {
    console.log('Not a valid day!');
}


//Conditional (Ternary) Operator

const age = 15;
// age >= 18 ? console.log('I like to drink wine') : 
// console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

//better not to do it like this. the conditional operator would be better.
let drink2;
if(age >= 18){
    drink2 = 'wine'
}else{
    drink2 = 'water'
}
console.log(drink2);

//now we'll incorporate the teranary opertator into a template literal

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);*/

/*CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉*/

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

