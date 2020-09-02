const express = require('express');
const mongoose = require('mongoose');
const app = express();
const myParser = require("body-parser")
const movielogic = require("./logic/movie")
require('dotenv').config();
const dbURI =process.env.DB_URI

mongoose.connect(dbURI,{useUnifiedTopology:true, useNewUrlParser:true})
.then((result)=>{app.listen(3000),console.log("Listening on port 3000");})
.catch((err)=>{console.log(err)})

app.use(myParser.urlencoded({extended:true}));
app.use(myParser.json())

app.get('/', (req,res)=>{
      console.log("works")
})


app.post('/add-movie',async (req,res)=>{
 
  var create =  await movielogic.create(req);
   console.log(create)
})
