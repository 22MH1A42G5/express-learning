const fs = require('fs');

const message = process.argv[2];
if(!message) {
    console.log("Please add the Message after Running the file");
    return;
}
const date = new Date().toLocaleString();
const appendingData = `[${date}] ${message}\n`;

try {
    fs.appendFile('logs.txt',appendingData , (err) => {
        if(err){
            console.log("There is an error" , err);
        }
    });
}
catch(err) {
    console.log("There is an error" , err);
}