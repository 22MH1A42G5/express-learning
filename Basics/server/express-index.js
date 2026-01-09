const http = require('http');
const fs = require('fs');
const url = require('url');

const express = require('express');

const app = express();

app.get("/" , (req , res) => {
    return res.send("This is Home Page");
});

app.get("/about" , (req , res) => {
    return res.send("Hello from about page");
});

app.get("/profile" , (req , res) => {
    return res.send(`Hello ${req.query.name}`)
})

app.listen(8000 , () => console.log("Server has Started"));