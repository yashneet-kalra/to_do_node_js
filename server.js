const express = require('express')
const app = express()
require('dotenv').config();
const port = 3000

// for IN-MEMORY APIs
const todosModule = require("./routes/todos");
const toDoList = todosModule.toDoList;
app.use("/todos/", todosModule.router)

// for DB APIs using ORM
// const todosDBModule = require("./routes/todos_with_db");
// app.use("/db/todos", todosDBModule.router);

// for inititalising the DB Models
// const db = require("./db-configurations/db-config");
// db.sequelize.sync({force: false})
//     .then(() => {
//         console.log("Synced DB.");
//     }).catch((err) => {
//         console.log("Failed to sync DB : " + err.message);
//     });


// for DB connection using DRIVER Library
// const dbDriver = require("./pg-promise-db-configurations/pg-promise-db-configs");
// const todosDBDriverModule = require("./routes/todos_with_driver");
// app.use("/db/driver/", todosDBDriverModule);


app.set("view engine", "ejs")

app.get("/:name", (req, res) => {
    res.render("index", { 
        name: req.params.name,
        len: toDoList.length
    })
})

app.get("*", (req, res) => {
    res.render("index", { len: toDoList.length})
})



app.listen(port, "0.0.0.0")

// () => {
//     console.log(`Server is listening to http://localhost:${port}`);
// }