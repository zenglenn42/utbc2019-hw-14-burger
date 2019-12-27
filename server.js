let express = require("express");
let exphbs = require("express-handlebars");
let burgers = require("./models/burger.js");

let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("index", {});
});

app.post("/api/burger", (req, res) => {
    let burger = req.body.burger;
    let devoured = req.body.devoured;
    console.log("burger = ", burger);
    burgers.create(["burger", "devoured"], [burger, devoured], (result) => {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

app.put("/api/burger/devour/:id", (req, res) => {
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

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});