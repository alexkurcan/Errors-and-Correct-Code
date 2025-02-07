//There are TWO errors in this file
// Challenge 1 - Control Structures (if-else statements)

// Write a program in JaveScipt that checks if a number is even or odd.
function isEvenOrOdd(x) {
    return(x % 2 == 0);
}

let x = 22;
isEvenOrOdd(x) ? console.log("Even") : console.log("Odd");

// Write a program in JaveScipt that checks if a person is eligible to vote based on their age.

function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}

let age = prompt("Please enter your age: ");
age = parseInt(age);

checkVotingEligibility(age);

// Write a program in JaveScipt that checks if a number is positive, negative, or zero, and displays the appropriate message.
function checkNumber(num) {
    if (num > 0) {
      console.log("The number is positive.");
    } else if (num < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }
  
  let userinput = prompt("Enter a number: ");
  userinput = parseFloat(userinput);
  checkNumberNegativeOddEven(userinput);

// Challenge 2 - Loops (For and While Loops)

// Write a program in JaveScipt that prints numbers from 1 to 10 using a for loop.
for (let x = 1; x <= 10; x++) {
    console.log(x);
  }

// Challenge 3 - Functions and Scopes
//  Write a function in JavaScript that accepts a string and returns the number of vowels in the string

function getCount(str) {
  let vowelCount = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let char of str) {
      if (vowels.includes(char)) {
          vowelCount ++
      }
  }
  console.log(vowelCount)
}

getCount("abracadabra")

// Challenge 4 - Arrays and Objects
// Write a program in JavaScript that stores a list of fruits and prints each fruit using a loop.

let fruit = ['grapefruit', 'kiwi', 'grape'];
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}
//  Write a program in Python that stores student names and their grades in a dictionary, and prints each student's name and grade.

let studentGrades = {
  "Sham": 100,
  "Alex": 100,
  "Khani": 100
};

for (let student in studentGrades) {
  console.log(student + ": " + student) //  console.log(student + ": " + studentGrades[student])
}
// Create an array of numbers in Python and write a function to find the highest number in the array.

function highestNum(n) {
  let high = n[0];
  for (let i = 1; i < n.length; i ++) {
      if (n[0] > high) {
          high = n[i];
      }
  }
  return high;
}

let numarray = [1, 5, 17, 200, 2, 9, 37, 91];
console.log(highestNum(numarray));

