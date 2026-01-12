const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();

const PORT = 8000;
app.get("/users" , (req , res) => {
    const html = `
    <ul>
    ${users.map(user => `<li> ${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});
app.use(express.json());

// Rest API Routes
app
.route("/api/users/:id")
.get((req , res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.patch((req , res) => {
    // Todo update the user Details using patch
    return res.json({status : "pending"});
})


.delete((req , res) => {
    // Todo Delete the user
    const id = Number(req.params.id);
    const updatedUsers = users.filter(user => user.id !== id);
    fs.writeFile("./MOCK_DATA.json" ,  JSON.stringify(updatedUsers) , (err) => console.log(err));
    return res.json({status : "deleted Sexesfully"});
})

app.get("/api/users" , (req , res) => {
    return res.json(users);
});

app.post( "/api/users", (req , res) => {
    // Todo add the user
    const body = req.body;
    // console.log(req.body);
    users.push(body);
    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users) , (err) => {
        console.log("There is an error",err);
    });
    return res.json({status : "Data Added"});
});

app.put("/api/users" , (req , res) => {
    // Todo update the user Details
    const id = Number(req.body.id);
    const body = req.body;
    for(let i = 0 ; i < users.length ; i++){
        if(users[i].id === id){
            users[i] = body;
            break;
        }
    }
    // Adding the Data into the file
    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users) , (err) => {
        console.log("Error" , err);
    });
    return res.json({status : "updated Sexesfully"});
});



app.listen(PORT , () => {
    console.log("Server is started at PORT" , PORT);
})