const express = require('express');
require('dotenv').config()
const favicon = require('serve-favicon')
const path = require('path')

const items = [
    {
        title: "U",
        message: "sage of JavaScript"
    },
    {
        title: "S",
        message: "imple to develop"
    },
    {
        title: "A",
        message: "pplications/services"
    },
    {
        title: "V",
        message: "ery easy to debug"
    },
    {
        title: "S",
        message: "imple syntax"
    },
    {
        title: "H",
        message: "uge community supporting EJS development and usage"
    },

]

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    
    res.render('pages/index', {
        qualitys: items,
    });
    
})

app.get("/about", function (req, res) {
    res.render('pages/about');
})



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}🚀`)
});
