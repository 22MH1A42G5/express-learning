const fs = require('fs');

// Creating the File

// Synchronous
// fs.writeFileSync('./practice.txt',"just a practice things");

// Asynchronous
// fs.writeFile('./practice1.txt',"just a practice things1" , (err) => {
//     if(err){
//         console.log("There is an error" , err);
//     }
//     else{
//         console.log("File Created Sexesfully");
//     }
// });


// Reading the File


// const data1 = fs.readFileSync('./contats.txt' , "utf-8");
// console.log(data1);

// fs.readFile('./contacts.txt' , "utf-8" ,(err , res) => {
//     if(err) {
//         console.log("There is an Error" , err);
//     }
//     else{
//         console.log(res);
//     }
// });


// Updating the File

// it will not override it will append the text
// fs.appendFileSync("./practice.txt" , new Date().getDate().toLocaleString());
// fs.appendFileSync("./practice.txt" , `Have a good day\n`);


// Copying File
// fs.cpSync("./practice.txt" , "./copy.txt");


// Delte File

// fs.unlinkSync("./copy.txt");

// Details About File
// console.log(fs.statSync("./practice1.txt"));
// console.log(fs.statSync("./practice1.txt").isFile());


// Creating Folders
// fs.mkdirSync("learning");
// fs.mkdirSync("learning/a/b" , {recursive: true});




