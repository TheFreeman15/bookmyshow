const express = require('express');
const mongoose = require('mongoose');
const app = express();
const myParser = require("body-parser")
const Movie = require("./models/Movie")
require('dotenv').config();
const dbURI =process.env.DB_URI
console.log(dbURI)
mongoose.connect(dbURI,{useUnifiedTopology:true, useNewUrlParser:true})
.then((result)=>{app.listen(3000),console.log("Listening on port 3000");})
.catch((err)=>{console.log(err)})

app.use(myParser.urlencoded({extended:true}));
app.use(myParser.json())

app.get('/', (req,res)=>{
      console.log("works")
})

app.post('/add-movie',(req,res)=>{
 
    const movie = new Movie(req.body)
    
    movie.save()
    .then((result)=>{
        console.log("Result Saved")
        res.send("Data Saved")
    })
    .catch((err)=>{
        console.log(err)
        res.send("Error Storing data")
    });

})
