// Start by setting up an empty array named myWork that will hold
// objects.
let myWork: object[] = [];
// Use a loop to create lessons:
let i = 1;
for (; i <= 10; i++) {
  const lessons = {
    name: `Lesson ${i}`,
    status: i % 2 === 0 ? true : false,
  };
  // Add the lesson to the array:
  myWork.push(lessons);
}
// Print the result:
console.log(myWork);
