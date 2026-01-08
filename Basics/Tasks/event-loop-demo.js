const fs = require("fs");

console.log("Start");

setTimeout(() => {
    
}, 0);

fs.readFile("./logs.txt" , "utf-8" , (err , res) => {
    if(err){
        console.log("There is an error" , err);
        return;
    }
    console.log("async" ,res);
})

const data = fs.readFileSync("./logs.txt" , "utf-8");
console.log(data);

console.log("End");

// At first in the execution the start will print and the setTimeOut will go to the eventloop and as it was the 
// 0ms it will finishes and the asynchronous task will comes and it goes into the eventloop and as it was non-blocking it will
// it will do its work in background and after that the synchronous task will go and it is blocking so the event loop will wait until the
// synchronous task will gets finished and when completing the synchronous the next line is the printing of end it will execute and checks
// the taskqueue and there will be the async task and take that and it will be printed