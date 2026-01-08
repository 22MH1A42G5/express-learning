const http = require("http");
const fs = require("fs");
const url = require('url');

const myServer = http.createServer((req , res) => {
    const myUrl = url.parse(req.url , true);
    if(myUrl.pathname === "/favicon.ico") return res.end();
    const shouldLog = true;
    switch(myUrl.pathname){
        case "/":
            res.end("Welcome Home");
            break;
        case "/profile":
            if(!myUrl.query.name || !myUrl.query.age){
                res.statusCode = 400;
                res.end("400 Bad Request");
                break; 
            }
            res.end(`Hello ${myUrl.query.name}, age ${myUrl.query.age}`);
            break;
        case "/search":
            if(!myUrl.query.query){
                res.statusCode = 400;
                res.end("400 Bad Request");
                break;
            }
            res.end(`Result for: ${myUrl.query.query}`);
            break;
        default:
            shouldLog = false;
            res.statusCode = 404;
            res.end("404 Not Found")
            return;
    }
    let logData;
    if(myUrl.pathname == "/"){
        logData = `[${new Date().toISOString()}] ${myUrl.pathname}\n`;
    }
    else{
        logData = `[${new Date().toISOString()}] ${myUrl.pathname} ${JSON.stringify(myUrl.query)}\n`;
    }
    fs.appendFile("./access.log" , logData , (err) => {
        if(err) {
            console.log("There is an Error" , err);
        }
    })
})

myServer.listen(8000 , () => {
    console.log("Server is Running");
})