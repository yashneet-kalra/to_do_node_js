const express = require("express");
const router = express.Router();

const {todos} = require("../db-configurations/db-config").sequelize.models;
const todoModel = todos;

router.get("/", async (req, res) => {
    try {
        const allTodos = await todoModel.findAll({
            attributes: ['id', 'sno', 'title', 'isCompleted']
        });
        if  (allTodos.length > 0) {
            const response = allTodos.map(todo => todo.toJSON());
            console.log(response);
            res.status(200).send(response);
            return;
        }
        res.status(200).send([]);
        return; 
        
    } catch (error) {
        console.log("[ERROR] : " + error);
        res.status(400).send(error);
    }
})

router.post("/create/:todo", async (req, res) => {
    try {
        await todoModel.create({
            sno: 1,
            username: "Yashneet",
            title: req.params.todo,
            isCompleted: '0'
        });
        console.log("Todo added successfully.")
        res.status(200).send("Todo added successfully.")
        
    } catch (error) {
        console.log("[ERROR] : " + error);
        res.status(400).send(error);
    }
})


router.delete("/del/:sno", async (req, res) => {
    try {
        const isDeleted = await todoModel.destroy({
            where: {
                sno: req.params.sno
            }
        });
        res.status(200).send(`Todo with SNO : ${req.params.sno} deleted successfully (TOTAL: ${isDeleted} entries) `);
        return; 
        
    } catch (error) {
        console.log("[ERROR] : " + error);
        res.status(400).send(error);
    }
})


module.exports = {
    router: router,
}