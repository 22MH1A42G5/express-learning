const http = require('http');
const fs = require('fs');
const myServer = http.createServer((req , res) => {
    const log = `[${new Date().toLocaleString()}] ${req.method} ${req.url}\n`;
    if(req.url === "/favicon.ico") return res.end();
    fs.appendFile('./access.log' , log , (err , data) => {
        if(err){
            console.log("There is an error" , err);
        }
    });
    switch(req.url){
        case "/":
            res.end("Home Page");
            break;
        case "/about":
            res.end("About Me");
            break;
        case "/contact":
            res.end("Contact Page");
            break;
        default:
            // res.statusCode(404);
            res.end("404 not found");
    }
});

myServer.listen(8000 , () => {
    console.log("Server has started");
});