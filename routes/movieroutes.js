const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const { route } = require('./theater');

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

router.post('/movies/edit/:movieId',async(req,res)=>{
          let output = {}
          let id = req.params.movieId
          await Movie.findByIdAndUpdate(id,req.body)
          .then((result)=>{
               output = {message:"Movie Updated"}  

          })
          .catch((err)=>{
               console.log(err)
               output = {message:"Failed"}  
          })
          res.send(output)
}); 

router.post('/movies/delete/:movieId',async(req, res)=>{
     let output = {}
     let id = req.params.movieId
     await Movie.findByIdAndDelete(id)
     .then((result)=>{
          output = {message:"Movie Deleted"}
     })
     .catch((err)=>{
          console.log(err)
          output = {message:"Failed"}
     })
     res.send(output)
})


module.exports = router;  