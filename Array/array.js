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

//