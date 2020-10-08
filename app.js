const express = require('express');
const app = express();
const myParser = require("body-parser")
const movieRoutes = require('./routes/movieroutes')
const theater = require('./routes/theater')
require('./config/db')();

app.use(myParser.urlencoded({extended:true}));
app.use(myParser.json())

app.use(movieRoutes)
app.use(theater)


app.listen(3000,()=>console.log("Listening on port 3000"))
