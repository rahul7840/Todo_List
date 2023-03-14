const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const { send } = require('process');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static("public"));


var items=["Drink 5L water","Do code"];

app.get("/", (req, res) => {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-IN", options)
    res.render("list.ejs", { kindofday: day, newListItems:items })
})

app.post("/", (req, res) => {
     item = req.body.newItem;
     items.push(item)
     res.redirect("/")
})




app.listen(3000, () => { console.log("server is running on 3000"); });
