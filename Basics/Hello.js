
const math = require('./math');
// const {add , subtract} = require('./math');

// console.log("Hey there! i am Javascript");

// console.log(math.add(2+5));
// console.log("Math value is ",add(2,5) , " " , subtract(20,5));

console.log("Math value is ",math.add(2,5) , " " , math.sub(20,5));

// console.log("Math value is ",math.add(5,3) , " ");


// Exits only after 2 seconds, not immediately
// No setTimeout abuse explanation

const start = Date.now();
while(Date.now() - start < 2000){
    // Do nothing
}
