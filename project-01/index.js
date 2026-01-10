const express = require("express");
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

// Rest API Routes
app
.route("/api/users/:id")
.get((req , res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.patch((req , res) => {
    // Todo update the user Details
    return res.json({status : "pending"});
})
.delete((req , res) => {
    // Todo Delete the user
    return res.json({status : "pending"});
})

app.get("/api/users" , (req , res) => {
    return res.json(users);
});

app.post( "/api/users", (req , res) => {
    // Todo add the user
    return res.json({status : "pending"});
});



app.listen(PORT , () => {
    console.log("Server is started at PORT" , PORT);
})