const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../views");

app.set('view engine', 'hbs');
app.set("views", view_path);
// hbs.registerPartials(partials_path);

app.use(express.static(static_path));

app.get("", (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log("listining")
})