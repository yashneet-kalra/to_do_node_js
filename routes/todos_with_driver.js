const express = require("express")
const router = express.Router();
const db = require("../pg-promise-db-configurations/pg-promise-db-configs");


router.get("/", (req, res) => {
    db.any('SELECT * FROM todos;')
    .then(rows => {
        // console.log(rows);
        res.status(200).send(rows);
    })
})

router.post("/create", (req, res) => {
    const sno = req.params.sno || req.get('sno');
    const title = req.params.title || req.get('title');
    const isCompleted = req.params.isCompleted || req.get('isCompleted');
    db.query('INSERT INTO todos (sno, title, "isCompleted") VALUES ($1, $2, $3)', 
        [sno, title, isCompleted]
    ).then(response => {
        console.log("Response : " + response)
        res.send(response);
    }).catch((err) => {
        console.log(err);
        res.send(error);
    })
})


router.delete("/del/:sno", (req, res) => {
    const sno = req.params.sno || req.get('sno');

    db.query('DELETE FROM todos WHERE sno = $1', sno)
    .then(response => {
        console.log(response);
        res.status(200).json(response);
    }).catch((err) => {
        console.log(err);
        res.status(400).send(err);
    })
})


module.exports = router;