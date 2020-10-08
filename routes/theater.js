const express = require('express');
const router = express.Router();
const Theater = require('../models/Theatre')

// Add Theater 
router.post('/theater/add',async (req,res)=>{
    let output = {}
    const th = new Theater(req.body)
    await th.save()
    .then((result)=>{
        console.log("Done")
        output = {message:"Done"}
    })
    .catch((err)=>{
        console.log(err)
        output = {message:"Failed"}
    })
       res.send(output)

});

// Fetch all 
router.get('/theater/all',async (req,res)=>{
    let output = {}
    await Theater.find().sort({ createdAt: -1 })
    .then((result)=>{
         // console.log("then")
         output = {result}
    })
    .catch((err)=>{
         console.log(err)
         output = {message:"Failed"};
    })
    res.send(output)
});
//FetchById
router.get('/theater/find/:theaterId',async(req,res)=>{
    let output = {};
    let id = req.params.theaterId;
    await Theater.findById(id)
    .then((result)=>{
        output = result
    })
    .catch((err)=>{
        console.log('error')
        output = {message:"Error"}
    })
    res.send(output)
});
// Edit 
router.post('/theater/edit/:theaterId',async(req,res)=>{
    let output = {}
    let id = req.params.theaterId
    await Theater.findByIdAndUpdate(id,req.body)
    .then((result)=>{
         output = {message:"Theater Updated"}  

    })
    .catch((err)=>{
         console.log(err)
         output = {message:"Failed"}  
    })
    res.send(output)
});
// Delete
router.post('/theater/delete/:theaterId',async(req, res)=>{
    let output = {}
    let id = req.params.theaterId
    await Theater.findByIdAndDelete(id)
    .then((result)=>{
         output = {message:"Theater Deleted"}
    })
    .catch((err)=>{
         console.log(err)
         output = {message:"Failed"}
    })
    res.send(output)
})




module.exports = router;