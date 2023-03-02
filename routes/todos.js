const express = require("express")
const router = express.Router()

const toDoList = []

router.get("/", (req, res) => {
    res.render("todos.ejs", { toDoList: toDoList})
})

router.post("/del/:serial", (req, res) => {
    const serialNumber = parseInt(req.params.serial);
    console.log(serialNumber);
    toDoList.splice(serialNumber-1, 1);
    console.log("Todo deleted successfully");
    res.redirect("/todos")
})

router.post("/add/:todo", (req, res) => {
    toDoList.push(req.params.todo);
    console.log("Todo added successfully");
    res.redirect("/todos")
})


module.exports = {
    router: router,
    toDoList: toDoList
}
