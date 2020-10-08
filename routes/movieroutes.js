const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Fetch all movies from DB
router.get('/movies/all', async (req,res)=>{
     let output = {}
     await Movie.find().sort({ createdAt: -1 })
     .then((result)=>{
          // console.log("then")
          output = {result}
     })
     .catch((err)=>{
          console.log(err)
          output = {message:"Failed"};
     })
     res.send(output)

}) 
// Find a movie by id 
router.get('/movies/find/:movieId', async (req,res)=>{

     let output = {}
     var id = req.params.movieId;
     await Movie.findById(id)
     .then((result)=>{
          output = {result}
     })
     .catch((err)=>{
          console.log(err)
          output = {message:"Failed"}
     })
     res.send(output)
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