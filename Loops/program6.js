let number;
do {
    number = parseFloat(prompt("Enter a number greater than 0:"));
} while (number <= 0);
console.log("Valid number entered:", number)