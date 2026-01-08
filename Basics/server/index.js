const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req , res) => {
    // console.log(req.headers);

    if(req.url === "/favicon.ico") return res.end();
    const log = `${new Date().toLocaleString()} ${req.url} Request Received\n`;
    const myUrl = url.parse(req.url , true);
    console.log(myUrl);
    fs.appendFile("./log.txt" , log , (err , data) => {
        if(err) {
            console.log("There is an Error" , err);
            return;
        }
        console.log("Updated Sexesfully");
        
    });
    switch(myUrl.pathname){
        case "/" :
            res.end("HomePage");
            break;
        case "/about":
            const temp = myUrl.query.name;
            res.end(`This is about page and says about ${temp}`);
            break;
        case "/search":
            const searchedData = myUrl.query.content;
            res.end(`These are the results for the search ${searchedData}`);
            break;
        default :
            res.end("no page exists");
    }
});

myServer.listen(8000 , () => {
    console.log("Server has Started");
});