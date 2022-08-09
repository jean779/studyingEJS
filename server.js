const express = require('express');
require('dotenv').config()
const favicon = require('serve-favicon')
const path = require('path')



const app = express();


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render('index');
    
})

app.get("/about", function (req, res) {
    res.render('about');
})



app.listen(process.env.PORT);
console.log(`Server is running on port: ${process.env.PORT}🚀`)