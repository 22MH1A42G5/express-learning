const express = require('express');

const app = express();

app.get("/login" , (req , res) => {
    return res.send("Login Page");
});

app.post("/login" , (req , res) => {
    if(!req.query.username || !req.query.password){
        return res.send("400 Bad Request");
    }
    return res.send(`Welcome ${req.query.username}`)
})

app.listen(8000 , () => {
    console.log("Server Started");
})