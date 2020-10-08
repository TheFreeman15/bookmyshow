const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');


// Add a movie to DB
router.post('/add-movie',async (req,res)=>{
         let output = {}
         const movie = new Movie(req.body)
         await movie.save()
         .then((result)=>{
              console.log("Done")
              output = {message:"Done"}         
         })
     
         .catch((err)=>{
             console.log(err)
             output = {message:"Failed"}
         });
             res.send(output)
         
     
  })
// Fetch all movies from DB
router.get('/movies', (req,res)=>{
      let result = {}
      Movie.find().sort({ createdAt: -1 })
      .then((result)=>{
           result = {movies:result}
      })
      .catch((err)=>{
           console.log(err)
           result = {message:"Failed"};
      })

}) 

module.exports = router;  