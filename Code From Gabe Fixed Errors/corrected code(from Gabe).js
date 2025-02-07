let fruits = ["apple","cherry", "mango", "banana"]
for (fruit in fruits) {
    console.log(fruits[fruit])
}

let grades_dictionary = {}
function student_grades(student, grade) {
    grades_dictionary[student] = grade
    console.log(grade + " has scored a " + student)
}
    
student_grades("Christopher", 101)
student_grades("Nayan", 99.34)
student_grades("Karim", 1)

my_array = [1, 2, 3, 4, 5]
function array_highest(array) {
    
    current_highest = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] > current_highest) {
            current_highest = array[i]
        }
    }
    console.log("The highest number in the array is " + current_highest)
}

array_highest(my_array)

function check_even_odd(number) {
    if (number % 2 == 0) {
        console.log("Even") 
    } else {
        console.log("Odd") 
    }
}
check_even_odd(2)

function check_eligibility(age) {
    if (age >= 18) {
        console.log("Eligible");
    } else {
        console.log("Not Eligible");
    }
}

check_eligibility(19)

function check_number(number) {
    if (number > 0) {
        console.log("Positive") ;
    } else if (number === 0) {
        console.log("Neither positive nor negative") ;
    } else {
        console.log("Negative")
    }
}

check_number(4) 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let i = 1;
while (i != 6) {
    console.log(i);
    i += .5;
}

function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    console.log(`The factorial of ${number} is ${result}`);
}
factorial(3)

function user_greeting() {
    let name = prompt("Enter your name: ");
    console.log(`Hello, ${name}!`);
}
user_greeting()

function even_or_odd(number) {
    if (number % 2 == 0) {
        console.log("Even") 
    } else {
        console.log("Odd") 
    }
}

even_or_odd(5)

function check_vowels(string) {
    num_of_vowels = 0
    vowels = "aeiou"
    for (c in vowels) {
        for (i in string){
            if (c == i){
                num_of_vowels += 1
            }
        }
        
    } 
    console.log("Vowels:", + num_of_vowels)
}

check_vowels("hello")