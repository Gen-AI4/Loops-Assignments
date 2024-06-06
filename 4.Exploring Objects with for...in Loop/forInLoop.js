var myObj = {
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
for (var object in myObj) {
    console.log(myObj[object]);
}
