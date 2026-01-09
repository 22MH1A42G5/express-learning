const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req , res) => {
    let shouldLog = true;
    if(req.url === "/favicon.ico") {
        res.end();
        return;
    }
    switch(req.url) {
        case "/":
            res.end("Home Page");
            break;
        case "/users":
            if(req.method == "GET"){
                res.statusCode = 200;
                res.end("All users");
            }
            else if(req.method == "POST"){
                res.statusCode = 201;
                res.end("User created");
            }
            else if(req.method == "PUT"){
                res.statusCode = 200;
                res.end("User replaced");
            }
            else if(req.method == "PATCH"){
                res.statusCode = 200;
                res.end("User updated");
            }
            else if(req.method == "DELETE"){
                res.statusCode = 204;
                res.end();
            }
            else{
                shouldLog = false;
                res.statusCode = 405;
                res.end("405 method not allowed")
            }
            break;
        default:
            shouldLog = false;
            res.statusCode = 404;
            res.end("404 Not Found");

        }
        if(shouldLog){
            const logData = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
            fs.appendFile("./access.log" , logData , (err) => {
                if(err)
                    console.log("Error" , err);
            });
        }
});

myServer.listen(8000 , () => {
    console.log("Server has Started");
})