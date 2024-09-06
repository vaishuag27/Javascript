// Program 1 Create an array named `fruits` with the values "Apple", "Banana", and "Cherry". Log the array.

let fruits = ["Apple","Banana","Cherry"];
console.log("initial fruits array:",fruits);
console.log(fruits)

//program 2 Add an item "Orange" to the end of the `fruits` array using the `push` method and log the updated array.

fruits.push("Oranges");
console.log("after push:",fruits);
console.log(fruits)

//Program 3 Remove the first item from the `fruits` array using the `shift` method and log the updated array.

fruits.shift();
console.log("after shift:",fruits);
console.log(fruits)

//Program 4 Find the index of "Banana" in the `fruits` array using the `indexOf` method and log it.

let bananaIndex = fruits.indexOf("Banana");
console.log("Index of Banana:",bananaIndex);

//Program 5 Loop through the `fruits` array and log each fruit to the console.
console.log("Looping through Fruits:");
fruits.forEach(fruits => console.log(fruits));

//Program 6 Create a new array called `numbers` with the values [1, 2, 3, 4, 5]. Use the `map` method to create a new array where each number is doubled, and log the new array.
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(number => number * 2);
console.log("Doubled numbers:", doubledNumbers)

//Program 7 Use the `filter` method to create an array `evenNumbers` with only the even numbers from the `numbers` array. Log the result.
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even numbers:", evenNumbers)

//Program 8 Use the `reduce` method to sum all the numbers in the `numbers` array and log the result.
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of numbers:", sum)

// 9. Create a multi-dimensional array `matrix` with 2 rows and 3 columns, then log each element in a nested loop.
let matrix = [
    [1, 2, 3],
    [4, 5, 6]
  ];
console.log("Matrix elements:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// 10. Sort the `fruits` array alphabetically using the `sort` method and log the sorted array.
fruits.sort();
console.log("Sorted fruits:", fruits)
