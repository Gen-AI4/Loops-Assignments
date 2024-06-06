var myWork = [];
var i = 1;
for (; i <= 10; i++) {
    var lessons = {
        name: "Lesson ".concat(i),
        status: i % 2 === 0 ? true : false,
    };
    myWork.push(lessons);
}
console.log(myWork);
