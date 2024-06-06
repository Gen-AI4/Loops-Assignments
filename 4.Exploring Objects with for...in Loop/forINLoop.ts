// Create a simple object with three items:
const myObj: object = {
  item01: {
    pName: "bags",
    price: 999,
    isAvailable: true,
  },
  item02: {
    pName: "shoes",
    price: 2500,
    isAvailable: true,
  },
  item03: {
    pName: "watches",
    price: 1400,
    isAvailable: false,
  },
};
// Use a for...in loop to get properties' names and values from the object:
for (let object in myObj) {
  console.log(myObj[object]);
}
