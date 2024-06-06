var myArray = [];
for (var i = 1; i < 10; i++) {
    console.log(myArray.push(i));
}
// 4. Use the for loop to iterate through the array and output each element with its index
for (var i = 0; i < myArray.length; i++) {
    console.log("Index: ".concat(i, ", Value: ").concat(myArray[i]));
}
// 5. Use the for...of loop to output each value directly into the console
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("Value:", value);
}
