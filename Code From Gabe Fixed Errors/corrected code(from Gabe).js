// IMPORTANT!!! this is just the functions that had the logic errors or at least I thought had logic errors

// The condition number / 2 == 0 is hould use %
function even_or_odd(number) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
even_or_odd(5);

// Using (fruit in fruit), which gives indcices rather than values
let fruits = ['apple', 'cherry', 'mango', 'banana']
for (let fruit of fruits) {
    console.log(fruit);
}

// current_highest = 0 can give incorreect results for arrays with all negative numbers
function array_highest(array) {
    let current_highest = array[0];
    for (let i = 0; i < array.length; i++) {
    if (array[i] > current_highest) {
            current_highest = array[i];
        }
    }
    console.log("The highest number in the array is " + current_highest);
}
array_highest([-1, -2, -3, -4, -5]);