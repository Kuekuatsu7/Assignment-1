//Assignment Day2

//Assignment 1
const number = prompt("Enter your number: ");
if (number >= 0) {
    if (number == 0) {
        console.log("The number is zero");
    } else {
        console.log("Positive : +ve");
    }
} else {
    console.log("Negative : -ve");
}


//Assignment 2
const N = parseInt(prompt('Enter your integer'));

//if number is 0
if (N === 0) {
    console.log('The factorial of ${N} is 1');
}

// if number is not positive
else if (N < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= N; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${N} is ${fact}.`);
}


//Assignment 3
const n1 = prompt('Enter your first number');
const n2 = prompt('Enter your second number');

if (n1 < n2){
    console.log('Your second integer is larger');
}

else if (n1 > n2){
    console.log('Your first integer is larger ');
}

else{
    console.log('Both your integers are equal');
}

//Assignment 4
function checkPalindrome(string) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);

console.log(value);

//Assignment 5

const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

//Assignment 6
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

const operator = prompt('Enter your desired operator');

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
console.log(`${number1} ${operator} ${number2} = ${result}`);


//Assignment 7
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}

const string = prompt('Enter a string: ');
const result = countVowel(string);

console.log(result);

//Assignment 9

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('The following Fibonacci Series are:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

//Assignment 10

const num = parseInt(prompt('Enter your integer: '));

for(let i = 1; i <= 10; i++) {
    const result = i * num;

    console.log(`${num} * ${i} = ${result}`);
}