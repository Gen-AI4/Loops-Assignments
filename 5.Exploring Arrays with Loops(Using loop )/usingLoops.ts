// Create an empty array:
let myArray: number[] = [];
// Run a loop 10 times, adding a new incrementing value to the array:
for (let i = 1; i < 10; i++) {
  console.log(myArray.push(i)); //Log the array into the console:
}

// Use the for loop to iterate through the array and output each element with its index
for (let i = 0; i < myArray.length; i++) {
  console.log(`Index: ${i}, Value: ${myArray[i]}`);
}

// Use the for...of loop to output each value directly into the console
for (const value of myArray) {
  console.log("Value:", value);
}
