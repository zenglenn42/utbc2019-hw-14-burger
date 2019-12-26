let express = require("express");
let exphbs = require("express-handlebars");

let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("index", {});
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});