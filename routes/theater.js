const express = require('express');
const router = express.Router();
const Theater = require('../models/Theatre')


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

module.exports = router;