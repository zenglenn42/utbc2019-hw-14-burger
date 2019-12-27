let express = require("express");
let router = express.Router();
let burgers = require("../models/burger.js");

router.get("/", (req, res) => {
    let condition = "devoured = false";
    let renderObj = {};
    burgers.selectWhere(condition, (result) => {
        if (result.length > 0) {
            renderObj.toDevour = result;
        }
        condition = "devoured = true";
        burgers.selectWhere(condition, (result) => {
            if (result.length > 0) {
                renderObj.devoured = result;
            }
            console.log("rendering: ", renderObj);
            res.render("index", renderObj);
        });
    });
});

router.post("/api/burger", (req, res) => {
    let burger = req.body.burger;
    let devoured = req.body.devoured;
    console.log("burger = ", burger);
    burgers.create(["burger", "devoured"], [burger, devoured], (result) => {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/devour/:id", (req, res) => {
    let burgerId = req.params.id;
    console.log("devour:", burgerId, )
    let condition = "id = " + burgerId;
    burgers.update({devoured: true}, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.json({id: burgerId})
        //res.status(200).end();
    })
});

module.exports = router;