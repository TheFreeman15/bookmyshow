const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');


// Fetch all movies from DB
router.get('/movies/all', (req,res)=>{
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
// Add a movie to DB

router.post('/movie/add',async (req,res)=>{
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



module.exports = router;  